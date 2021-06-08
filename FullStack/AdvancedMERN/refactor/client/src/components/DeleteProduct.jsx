import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react';

const DeleteProduct = props => {
    const {id} = props

    const deleteProduct = (e) => {
        e.preventDefault()
        console.log(id)
        axios.delete("http://localhost:8000/api/products/delete/"+id)
            .then(response =>{ 
                console.log(response.data)
                // window.location.replace("/")
                navigate("/")
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
            <input type="button" name="" id="" onClick={deleteProduct} value="Delete"/>
        </div>
    );
};



export default DeleteProduct;