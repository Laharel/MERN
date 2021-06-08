import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { useHistory } from 'react-router-dom'

const ProductList = ({newProduct, products, setProducts}) => {
    var getAllProductsAPI = "/api/products"
    const [loaded, setLoaded] = useState(false)

    useEffect( ()=> {
        axios.get("http://localhost:8000"+getAllProductsAPI)
            .then(response => {
                console.log(response.data.products)
                setProducts(
                    response.data.products
                )
                setLoaded(true)
            } 
            )
            .catch(err => console.log(err))
    }, [newProduct])


    return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                            {loaded? 
                            <Link to={`/${product._id}`}>{product.title}</Link>
                            : 
                            <p>nothing</p> }
                    </div>
                )
            }) }
        </div>
    );
};

export default ProductList;