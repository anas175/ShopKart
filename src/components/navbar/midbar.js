import React from 'react';

const Midbar = () => {
    return (
        <div className="container mid-bar-container">
            <div className='d-flex align-items-end mid-header'>
                <div className='logo-name poppins'>
                    ShopKart
                </div>

                <div className='ms-auto mb-2'>
                    Wishlist(0)
                </div>
                <div className='mb-2'>
                    Bag(0)
                </div>

            </div>
            <hr style={{ margin: '0', opacity: '1' }} />
        </div>
    );
}

export default Midbar;
