import React, { useEffect, useState } from 'react';
import {Router, navigate} from '@reach/router'
import ProductForm from './ProductForm'
import axios from 'axios'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import ProductEdit from './ProductEdit'
import MainProduct from './MainProduct';

const Products = props => {
    const [products, setProducts] = useState([{
        title: "",
        price:0,
        description:"",
        _id:0
    }])
    const [product,setProduct] = useState({
        title:"",
        price:0,
        description:"",
    })
    const [editProduct,setEditProduct] = useState({
        title:"",
        price:0,
        description:"",
        _id:0
    })

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products")
            .then(response =>{
                setProducts(response.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    const createProduct = (e)=> {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products/create", product)
            .then(product => setProducts([...products, product]))
            .catch(err => console.log(err))
    }

    return (
        <div>
        <Router>
            <MainProduct path="/" products={products} handleSubmit={createProduct} setProduct={setProduct} product={product} />
            <ProductDetails path="/:id" products={products} />
            <ProductEdit  
                path="/edit/:id" 
                setProduct={setEditProduct} 
                product={editProduct} 
                products={products}
                setProducts={setProducts}
            />
        </Router>
        </div>
    );
};



export default Products;