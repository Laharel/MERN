import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({setNewProduct, product, setProduct}) => {
    const productFormStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    const formSpanStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '20%',
        padding: '8px 8px',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: '5px',
        color: 'grey',
        marginTop: '20px'
    }
    const formButtonStyle = {
        display: 'flex', 
        justifyContent:'center',
        alignItems: 'center', 
        width:'140px', 
        height: '25px',
        marginTop: '20px',
        color: 'grey',
        backgroundColor: 'lightgrey',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
    }

    const formInputStyle = {
        border: '0',
        borderRadius: '2px',
        height: '20px'
    }

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    var create_api = "/api/products/create";

    const changeHandler = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value)
            setProduct({
                ...product,
                title: title
            })
        }
        else if(e.target.name === 'price'){
            setPrice(e.target.value)
            setProduct({
                ...product,
                price: price 
            })
        }
        else if(e.target.name === 'description'){
            setDescription(e.target.value)
            setProduct({
                ...product,
                description: description
            })
        }
    }

    const formHandler = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:8000"+create_api, {
            title,
            price,
            description
        })
            .then(newProduct_ => setNewProduct(newProduct_) )
            .catch(err => console.log(err))

    }
    return (
        <div>
            <form onSubmit={formHandler} style={productFormStyle}>
                <span style={formSpanStyle}>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input onChange={changeHandler} style={formInputStyle} type="text" name="title" id="title" />
                </span>

                <span style={formSpanStyle}>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input onChange={changeHandler} style={formInputStyle} type="text" name="price" id="price" />
                </span>

                <span style={formSpanStyle}>
                    <label htmlFor="description">
                        Description
                    </label>
                    <input onChange={changeHandler} style={formInputStyle} type="text" name="description" id="description" />
                </span>

                <button style={formButtonStyle}>Create</button>

            </form>
        </div>
    );
};


export default ProductForm;