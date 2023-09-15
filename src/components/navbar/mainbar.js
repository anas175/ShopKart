import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mainbar = ({ categories }) => {
    const [toggle, setToggle] = useState(false);
    function toggler() {
        setToggle(!toggle)


    }

    const navigate = useNavigate()
    function filter(category) {
        navigate({ pathname: '/', search: `?category=${category}` })
        toggler()
    }
    return (
        <div className="container">
            <div>
                <div className='bar-wrapper'>
                    <a className=" poppins text-white mobile-logo" href="#">ShopKart</a>
                    <a className='bar-button' onClick={toggler} href='#'>
                        <i className=' fas fa-bars text-white bar-toggler'></i>
                    </a>
                </div>
                <div className={`custom-nav dropdown-hide ${toggle && 'dropdown-show'}`} id='custom-nav' >

                    <div><a onClick={toggler} href="#">HOME</a></div>
                    <div><a onClick={toggler} href="#">ABOUT</a></div>

                    <div class="dropdown">

                        <a href="#" class="  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">OUR PRODUCTS</a>
                        <ul class="dropdown-menu dropdown-box">
                            {categories && categories.map((category, idx) => {
                                return <li id={'p' + idx + 1} key={idx} ><a onClick={() => filter(category)} className="dropdown-item " href="#product"> {category}</a></li>
                            })}
                        </ul>
                    </div>
                    <div><a onClick={toggler} href="#contact">CONTACT US</a></div>

                </div>
            </div>

        </div>
    );
}

export default Mainbar;
