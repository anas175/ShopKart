import React from 'react';

const Topbar = () => {
    return (
        <div className='top-header'>
            <div className="container">
                <div className="d-flex  py-3" >
                    <div>
                        Free Devlivery |  Return policy

                    </div>

                    <div className='ms-auto' >
                        Login

                    </div>
                    <div >
                        Follow Us
                    </div>

                    <div>
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div><i class="fa-brands fa-linkedin-in"></i></div>
                    <div> <i class="fa-brands fa-twitter"></i></div>

                </div>
            </div>
        </div>
    );
}

export default Topbar;
