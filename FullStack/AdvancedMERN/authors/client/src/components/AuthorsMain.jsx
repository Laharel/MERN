import React, { useEffect, useState } from 'react';
import {Router} from '@reach/router'
import axios from 'axios'
import AuthorsList from './AuthorsList';
import CreateAuthor from './CreateAuthor';
import EditAuthor from './EditAuthor';

const AuthorsMain = props => {
    // list of authors
    const [authors, setAuthors] = useState([{
        name:""
    }])
    // name
    const [name, setName] = useState("")
    // get all authors from DB
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data.authors)
                setAuthors(res.data.authors)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Favourite Authors</h1>
            <Router>
                <AuthorsList path="/" authors={authors} setAuthors={setAuthors} />
                <CreateAuthor path="/authors/new" authors={authors} setAuthors={setAuthors} />
                <EditAuthor path="/authors/edit/:id" authors={authors} setAuthors={setAuthors} />
            </Router>
        </div>
    );
};


export default AuthorsMain;