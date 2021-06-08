import React from 'react';

const UserForm = ({formHandler, fname, setFname, lname, setLname, password, setPassword}) => {

    
    return(
        <form onSubmit={formHandler}>
            <div>
                <label>First Name</label>
                <input type="text" value={fname} onChange={ e => setFname(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={lname} onChange={ e => setLname(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UserForm;