import axios from 'axios';
import React from 'react';

const DeleteButton = ({deleteId, callback}) => {

    const clickHandler = e => {
        axios.delete(`http://localhost:8000/api/user/${deleteId}`)
            .then( res => {
                callback(deleteId)
            })
    }
    return(
        <button onClick={clickHandler}>DELETE</button>
    )
}

export default DeleteButton;