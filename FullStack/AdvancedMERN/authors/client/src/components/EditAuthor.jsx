import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from './AuthorForm';

const EditAuthor = props => {
    const {id, authors, setAuthors} = props
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    useEffect( ()=> {
        authors.map(author => {
            if(author._id == id){
                setName(author.name)
            }
        })
    }, [id])

    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {name:name})
            .then(response => {
                console.log(response.data.author)
                authors.map((author,idx) => {
                    if(author._id == id){
                        let arr = [...authors]
                        arr[idx] = response.data.author
                        setAuthors(arr)
                        navigate("/")

                    }
                })
            })
            .catch(err=> {
                setError(err.response.data.error.errors.name.message)
                console.log(err)
            })
    }
    return (
        <div>
            Edit this author
            <AuthorForm name={name} setName={setName} handleSubmit={handleUpdate} error={error} />
        </div>
    );
};

export default EditAuthor;