import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ProductForm from './ProductForm'
import axios from 'axios'
import {navigate} from '@reach/router'
import DeleteProduct from './DeleteProduct'


const ProductEdit = props => {
    const {products, id, setProducts} = props
    const currProduct = products.filter(product=> product._id===id)[0]
    const [editProduct, setEditProduct] = useState({})

    useEffect( ()=>{
        setEditProduct(currProduct)
    }, [currProduct])

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(editProduct)
        axios.put("http://localhost:8000/api/products/update/"+editProduct._id, editProduct)
        .then(updatedProduct => {
            let tmpArr = [...products]
            for(let i=0;i<tmpArr.length;i++){
                if(tmpArr[i]._id === id){
                    tmpArr[i] = updatedProduct.data
                }
            }
            setProducts(tmpArr)
            window.location.replace("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Editing</h1>
            <ProductForm handleSubmit={handleSubmit} setProduct={setEditProduct} product={editProduct} />
            <DeleteProduct id={id} />
        </div>
    );
};

export default ProductEdit;