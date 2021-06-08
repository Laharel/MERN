import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';

const AuthorForm = props => {
    const {handleSubmit, name, setName, error} = props
    const [message, setMessage] = useState("")
    useEffect( ()=> {
        setMessage(error)
    }, [error])

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleCancel = () => {
        navigate("/")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {message && 
                <p style={{color:'red'}}>{message}</p>
                }
                <label htmlFor="">
                    Name:
                </label>
                <input type="text" name="" id="" value={name} onChange={handleChange} />
                <div>
                    <button>Submit</button>
                    <input type="button" value="Cancel" name="" id="" onClick={handleCancel} />
                </div>
            </form>
        </div>
    );
};


export default AuthorForm;