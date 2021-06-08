import React, { useState } from  'react';
    
const MoreForms = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [fnameError, setfnameError] = useState("");  
    const [lnameError, setlnameError] = useState("");  
    const [emailError, setemailError] = useState("");  
    const [pwdError, setpwdError] = useState("");  
    const [cpwdError, setcpwdError] = useState("");  
    
    const createuser = (e) => {
        e.preventDefault();
        const newuser = { firstname, lastname,email, password,confirmpassword };
        console.log("Welcome", newuser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for creating a user!";
	} else {
	    return "Welcome, please create a user";
	}
    };

    const handlefname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setfnameError("First Name must be 2 characters or longer!");
        }else{
            setfnameError("");
        }
    }
    

    const handlelname = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 1) {
            setlnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setlnameError("Last Name must be 2 characters or longer!");
        }else{
            setlnameError("");
        }
    }

    const handleemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        }else{
            setemailError("");
        }
    }

    const handlepwd = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpwdError("Password is required!");
        } else if(e.target.value.length < 8) {
            setpwdError("Password must be 8 characters or longer!");
        }else{
            setpwdError("");
        }
    }
    const handlecpwd = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setcpwdError("Password is required!");
        }else if(e.target.value !== password) {
            setcpwdError("Cornfirm Password must match with Password");
        }else{
            setcpwdError("");
        }
    }

    return(
        <div>
            <form onSubmit={ createuser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handlefname } />
                {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handlelname } />
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleemail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handlecpwd } />
                {
                    cpwdError ?
                    <p style={{color:'red'}}>{ cpwdError }</p> :
                    ''
                }
            </div>          
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlepwd } />
                {
                    pwdError ?
                    <p style={{color:'red'}}>{ pwdError }</p> :
                    ''
                }
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
    
export default MoreForms;
