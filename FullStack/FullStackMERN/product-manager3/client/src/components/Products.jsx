import React, { useState } from 'react';
import ProductList from './ProductList'
import ProductForm from './ProductForm'

const Products = props => {
    const [products, setProducts] = useState([{}])
    // product data received after posting new product
    const [newProduct, setNewProduct] = useState("")
    const [product, setProduct] = useState({
        title:"",
        price:10,
        description: "",
    })

    return (
        <div>
            <ProductForm setNewProduct={setNewProduct} product={product} setProduct={setProduct}/>
                <ProductList newProduct={newProduct} products={products} setProducts={setProducts}/>
        </div>
    );
};


export default Products;