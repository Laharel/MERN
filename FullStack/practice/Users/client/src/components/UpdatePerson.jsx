import React, {useState, useEffect} from 'react';
import UserForm from './UserForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const UpdateUser = ({id, users, setusers}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        const thisUser = users.filter(User => User._id === id)[0];
        console.log(thisUser);
        setFname(thisUser.fname);
        setLname(thisUser.lname);
        setPassword(thisUser.password);
    }, [id, users])

    const updateHandler = e =>{
        e.preventDefault();
        const updatedUser = {
            fname,
            lname,
            password
        }
        axios.put(`http://localhost:8000/api/user/${id}`, updatedUser)
            .then( res => {
                let arr = [...users];
                for (let i=0; i< arr.length; i++){
                    if(arr[i]._id === id){
                        arr[i] = res.data;
                    }
                }
                setusers(arr);
                navigate("/")
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
            <h1>Update {fname} {lname}</h1>
            <UserForm 
            formHandler={updateHandler}
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

export default UpdateUser;