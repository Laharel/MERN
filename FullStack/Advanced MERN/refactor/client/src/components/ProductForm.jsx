import React, { useState } from 'react';

const ProductForm = props => {

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

    const {setProduct, product, handleSubmit} = props

const titleHandler = (e) => {
    setProduct({...product,title:e.target.value})
}
const priceHandler = (e) => {
    setProduct({...product,price:e.target.value})
}
const descHandler = (e) => {
    setProduct({...product,description:e.target.value})
}

    return (
        <div>
            <form onSubmit={handleSubmit} style={productFormStyle}>
                <span style={formSpanStyle}>
                    <label htmlFor="title">
                        Title
                    </label>
                    {product? 
                        <input onChange={titleHandler} style={formInputStyle} type="text" name="title" id="title" placeholder={product.title}/>
                        :
                        <input onChange={titleHandler} style={formInputStyle} type="text" name="title" id="title"/>
                
                    }
                </span>

                <span style={formSpanStyle}>
                    <label htmlFor="price">
                        Price
                    </label>
                    {product?
                    
                    <input onChange={priceHandler} style={formInputStyle} type="text" name="price" id="price" placeholder={"$"+product.price} />
                    :
                    <input onChange={priceHandler} style={formInputStyle} type="text" name="price" id="price"  />
                    }
                </span>

                <span style={formSpanStyle}>
                    <label htmlFor="description">
                        Description
                    </label>
                    {product?
                    
                    <input onChange={descHandler} style={formInputStyle} type="text" name="description" id="description" placeholder={product.description}/>
                    :
                    <input onChange={descHandler} style={formInputStyle} type="text" name="description" id="description"/>
                    }
                </span>

                <button style={formButtonStyle}>Create</button>

            </form>
        </div>
    );
};


export default ProductForm;