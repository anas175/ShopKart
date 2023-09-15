import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ categories }) => {
    const navigate = useNavigate()
    function filter(category) {
        navigate({ pathname: '/', search: `?category=${category}` })
    }



    return (

        <div className="container pt-1">
            <nav className="navbar navbar-expand-lg navbar-container" >
                <div className="container-fluid">
                    <a className="navbar-brand poppins text-white" href="#">ShopKart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon" /> */}
                        <i className=' fas fa-bars text-white bar-toggler'></i>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link text-white" aria-current="page" href="#">ABOUT</a>
                            </li>

                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link  text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    OUR PRODUCTS
                                </a>
                                <ul className="dropdown-menu dropdown-box">
                                    {categories && categories.map((category, idx) => {
                                        return <li id={'p' + idx + 1} key={idx} ><a onClick={() => filter(category)} className="dropdown-item " href="#product"> {category}</a></li>
                                    })}


                                </ul>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link text-white" aria-current="page" href="#contact">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
