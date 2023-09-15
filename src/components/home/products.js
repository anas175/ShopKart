import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProductCard from './productCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Products = ({ products }) => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [data, setData] = useState(products);

    useEffect(() => {
        setData(products)

    }, [products]);
    console.log(data);
    return (

        <div className='container pt-5 product-wrapper' id='product'>
            <h2>New products</h2>
            <div className="product-container ">
                <div className='filter mx-2'>
                    <div>Apparel</div>
                    <div>Accessories</div>
                    <div>Best sellers</div>
                    <div>50% off</div>
                </div >
                <div className='product-list'>
                    {data && data.length && <>


                        <Swiper id={data}
                            // spaceBetween={10}
                            slidesPerView={3.4}
                            navigation
                            ref={sliderRef}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.4,
                                },

                                768: {
                                    slidesPerView: 2.4,
                                },
                                865: {
                                    slidesPerView: 3.4
                                },

                            }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        >

                            {data && data.map((product, idx) => {
                                return <SwiperSlide >
                                    <div class='item' id={product.id} key={idx} >

                                        <ProductCard product={product} />
                                    </div>
                                </SwiperSlide>
                            })}

                        </Swiper>
                        <div className='navigation-arrow'>
                            <div className="prev-arrow text-dark" onClick={handlePrev} >
                                <i class="fa-solid fa-arrow-left-long"></i>
                            </div>
                            <div className="next-arrow" onClick={handleNext} >
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>


        </div>
    );
}

export default Products;
