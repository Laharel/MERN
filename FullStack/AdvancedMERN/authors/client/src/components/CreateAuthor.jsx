import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const CreateAuthor = props => {
    const {setAuthors, authors} = props
    const [name, setName] = useState()
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors/create`, {name: name})
            .then(newAuthor => {
                setAuthors([...authors, newAuthor.data.author])
                navigate("/")
            })
            .catch(err=> {
                setError(err.response.data.error.errors.name.message)
                console.log(err.response.data.error.errors.name.message)
            })
    }
    return (
        <div>
            {/* call form(name, handleSubmit, setName) */}
            <Link to="/">Home</Link>
            <p>Add a new author</p>
            <AuthorForm name={name} setName={setName} handleSubmit={handleSubmit} error={error} />
        </div>
    );
};


export default CreateAuthor;