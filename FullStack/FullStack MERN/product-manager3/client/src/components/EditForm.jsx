import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../MyContext'

const EditForm = props => {
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
    const id = props.id
    const context = useContext(MyContext)
    // const setNewProduct = context.setNewProduct
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    var edit_api = `/api/products/${id}/edit`;
    const [product, setProduct] = useState()
    const [newProduct, setNewProduct] = useState()

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {return res.data})
            .then(res => {
                console.log(res.product)
                setProduct(res.product[0])
            })
            .catch(err => console.log(err))
    }, [newProduct])

    const changeHandler = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }
        else if(e.target.name === 'price'){
            setPrice(e.target.value)
        }
        else if(e.target.name === 'description'){
            setDescription(e.target.value)
        }
    }
    const formHandler = (e)=> {
        e.preventDefault();
        // console.log(title)
        // console.log(price)
        // console.log(description)
        if(!title){
            console.log(product.title)
            setTitle(product.title)
        }
        if(!price){
            console.log(product.price)
            setPrice(product.price)
        }
        if(!description){
            console.log(product.description)
            setDescription(product.description)
        }
        axios.put("http://localhost:8000"+edit_api, {
            title,
            price,
            description
        })
            .then(newProduct_ => setNewProduct(newProduct_) )
            .catch(err => console.log(err))
    }

    const handleDelete = (e)=> {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/products/${e.target.name}/delete`)
            .then(deleted => console.log(deleted))
            .catch(err => console.log(err))
            window.location.replace("/")

    }
    return (
        <div>
            <form onSubmit={formHandler} style={productFormStyle}>
                <span style={formSpanStyle}>
                    <label htmlFor="title">
                        Title
                    </label>
                    {product? 
                        <input onChange={changeHandler} style={formInputStyle} type="text" name="title" id="title" placeholder={product.title} />
                        :
                        <input onChange={changeHandler} style={formInputStyle} type="text" name="title" id="title" />
                    }
                </span>

                <span style={formSpanStyle}>
                    <label htmlFor="price">
                        Price
                    </label>
                    {product?
                        <input onChange={changeHandler} style={formInputStyle} type="text" name="price" id="price" placeholder={`$${product.price}`}/>
                        :
                        <input onChange={changeHandler} style={formInputStyle} type="text" name="price" id="price"/>
                
                    }
                </span>

                <span style={formSpanStyle}>
                    <label htmlFor="description">
                        Description
                    </label>
                    {product?
                        <input onChange={changeHandler} style={formInputStyle} type="text" name="description" id="description" placeholder={product.description}/>
                        :
                        <input onChange={changeHandler} style={formInputStyle} type="text" name="description" id="description"/>
                    
                    }
                </span>

                <button style={formButtonStyle}>Create</button>
                <input onClick={handleDelete} type="button" name={id} id="" value={"Delete"} />

            </form>        
        </div>
    );
};


export default EditForm;