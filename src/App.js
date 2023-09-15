import Contact from "./components/home/contact";
import Fresh from "./components/home/fresh";
import Products from "./components/home/products";
import Midbar from "./components/navbar/midbar";
import Navbar from "./components/navbar/navbar";
import Topbar from "./components/navbar/topbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Mainbar from "./components/navbar/mainbar";

function App() {
  const [originalProducts, setOriginalProducts] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (originalProducts && categoryParam) {
      const pr = originalProducts.filter((product) => product.category === categoryParam)
      if (pr.length)
        setProducts(pr)
      else setProducts(originalProducts)
    }
  }, [originalProducts, categoryParam]);

  //   Getting  categories from API
  const [categories, setCategories] = useState(null);

  async function fetchCategories() {
    const { data } = await axios.get('https://fakestoreapi.com/products/categories')
    setCategories(data)
  };

  // getting product listing from API
  const [products, setProducts] = useState(null);
  async function productList() {
    const { data } = await axios.get('https://fakestoreapi.com/products')

    setProducts(data)
    setOriginalProducts(data)
  };
  // console.log(products);



  // console.log(products);

  useEffect(() => {
    if (!categories)
      fetchCategories();

    if (!products)
      productList();
  }, []);

  return (
    <div>

      <Topbar />
      <div className="rectangle-img">
        <Midbar />
        <Mainbar categories={categories} />
        {/* <Navbar categories={categories} /> */}

        <Fresh />

      </div>
      <Products products={products} />
      <Contact />
    </div>

  );
}

export default App;
