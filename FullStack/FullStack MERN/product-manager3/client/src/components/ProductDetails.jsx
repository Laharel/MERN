import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductDetails = props => {

    const [product, setProduct] = useState([])

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products/"+props.id)
            .then(res => {return res.data})
            .then(res => {
                console.log(res.product)
                setProduct(res.product[0])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};


export default ProductDetails;