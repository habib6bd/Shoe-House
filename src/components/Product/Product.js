import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product} = props;
    return (
        <div className='product'>
            <img src={product.img} alt="" />
            
        </div>
    );
};

export default Product;