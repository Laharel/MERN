import React from 'react';
import DeleteProduct from './DeleteProduct'


const ProductDetails = props => {
    const {products, id} = props
    const product = products.filter(product => product._id == id)[0]
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <DeleteProduct id={id} />
        </div>
    );
};


export default ProductDetails;