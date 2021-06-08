import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react';

const DeleteAuthor = props => {
    const {id, setAuthors, authors} = props
    
    const handleDelete = (e) =>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                let tmpArr = authors.filter(author => author._id != id)
                console.log(tmpArr)
                console.log(res.data)
                setAuthors(tmpArr)
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <input type="button" name="" id="" onClick={handleDelete} value="Delete"/>
        </div>
    );
};


export default DeleteAuthor;