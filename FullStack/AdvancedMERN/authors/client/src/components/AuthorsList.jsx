import React, { useEffect, useState } from 'react';
import DeleteAuthor from './DeleteAuthor';
import {Link} from '@reach/router'

const AuthorsList = props => {
    const {authors, setAuthors} = props
    const [list, setList] = useState([])

    useEffect( ()=> {
        setList(authors)
    }, [authors, setAuthors])

    const tableStyle ={
        border:'1px solid black',
        borderCollapse: 'collapse'
    }

    return (
        <div>
            <Link to="/authors/new">Add an author</Link>
            {list && 
                <div>
                    <table style={tableStyle}>
                        <tr>
                            <th style={tableStyle} >Author</th>
                            <th style={tableStyle}>Actions Available</th>
                        </tr>
                            {list.map(author => {
                                return (
                                    <tr>
                                        <td style={tableStyle}>{author.name}</td>
                                        <td style={tableStyle}>
                                            <DeleteAuthor
                                                id={author._id}
                                                authors={list}
                                                setAuthors={setAuthors}
                                            />
                                            <Link to={`/authors/edit/${author._id}`}>
                                                <button>Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}

                    </table>

                </div>
            }
        </div>
    );
};


export default AuthorsList;