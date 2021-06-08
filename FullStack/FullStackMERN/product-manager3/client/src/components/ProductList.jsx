import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import MyContext from '../MyContext'

const ProductList = props => {
    var getAllProductsAPI = "/api/products"
    const [loaded, setLoaded] = useState(false)
    const context = useContext(MyContext)
    const newProduct = context.newProduct
    const [products, setProducts] = useState([{}])

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

    const handleDelete = (e)=> {
        e.preventDefault()
        console.log(e.target.name)
        axios.delete(`http://localhost:8000/api/products/${e.target.name}/delete`)
            .then(deleted => console.log(deleted))
            .catch(err => console.log(err))
            window.location.reload()  

    }

    return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                            {loaded? 
                            <div>
                                <Link to={`/${product._id}`}>
                                    {product.title}
                                </Link>
                                <Link to={`/${product._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                                <input type="button" name={product._id} id="" onClick={handleDelete} value={"Delete"}/>
                                {/* <p onClick={handleClick} p_id={product._id} style={{cursor:'ponter'}}>Edit</p> */}
                            </div>
                            : 
                            <p>nothing</p> }
                    </div>
                )
            }) }
        </div>
    );
};

export default ProductList;