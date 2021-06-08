import React, { useState } from  'react';
    
const HookForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmPassword] = useState("");  
    
    const createuser = (e) => {
        e.preventDefault();
        const newuser = { firstname, lastname,email, password,confirmpassword };
        console.log("Welcome", newuser);
    };
    
    return(
        <div>
            <form onSubmit={ createuser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            </form>
            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    );
};
    
export default HookForm;
