import React from 'react';
import ProductList from './ProductList'
import ProductForm from './ProductForm'

const MainProduct = props => {
    const {handleSubmit, setProduct, product, products} = props
    return (
        <div>
            <ProductForm handleSubmit={handleSubmit} setProduct={setProduct} product={product} />
            <ProductList products={products} />
        </div>
    );
};

export default MainProduct;