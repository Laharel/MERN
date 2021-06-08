import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router'
import DeleteProduct from './DeleteProduct'
import { deleteModel } from 'mongoose';

const ProductList = props => {
    const {products} = props
    const [list, setList] = useState([])

    const productListStyle={
        display:'flex',
        justifyContent:'center'
    }
    const listContentStyle ={
        display:'flex'
    }

    useEffect( () => {
        setList(products)
    }, [products])

    return (
        <div style={productListStyle}>
            {products? 
            
            <ul>
                {products.map(product => {
                    return(
                        <div style={listContentStyle}>
                            <Link to={`/${product._id}`}>
                                <li>{product.title}</li>
                            </Link>
                            <Link to={`/edit/${product._id}`}>
                            <input type="button" value="Edit" name="" id="" />
                            </Link>
                            <DeleteProduct id={product._id}/>


                        </div>

                    )
                })}
            </ul>
            :
            <></>
            }
        </div>
    );
};


export default ProductList;