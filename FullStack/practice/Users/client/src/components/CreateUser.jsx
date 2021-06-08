import React, {useState} from 'react';
import UserForm from './UserForm';
import axios from "axios";
import {navigate} from '@reach/router'

const CreateUser = ({users, setusers}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState(0);
    const [errors, setErrors] = useState([]);

    const createHandler = e => {
        e.preventDefault();
        const newUser = {
            fname,
            lname,
            password
        }
        axios.post("http://localhost:8000/api/user", newUser)
            .then( res => {
                setusers([...users, res.data]);
                navigate('/');
            })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                console.log(errRes);
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].messpassword);
                }
                setErrors(errArr);
            })
    }
    return(
        <div>
            <h1>Create a User</h1>
            <UserForm 
            formHandler={createHandler}
            fname={fname}
            setFname={setFname}
            lname={lname}
            setLname={setLname}
            password={password}
            setPassword={setPassword}
            />
            {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}
        </div>
    )
}

export default CreateUser;