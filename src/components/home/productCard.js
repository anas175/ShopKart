import React from 'react';

const ProductCard = ({ product }) => {
    return (

        <div className="product-card mx-3">
            <img className='product-img' src={product.image} alt="Product" />
            <div className='px-2 py-2'>
                <h3 className='break-1'>{product.title}</h3>
                <p className='break-3'>{product.description} </p>
                <p className='price'>{'$' + product.price}</p>
            </div>
        </div>

    );
}

export default ProductCard;
