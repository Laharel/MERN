import React, {useState} from 'react';
import {Router} from '@reach/router';
import UserParent from './UserParent';
import CreateUser from './CreateUser';
import UpdateUser from "./UpdateUser";
const FormSelect = (props) => {
    const [users, setusers] = useState([{
        fname: "",
        lname: "",
        password: ""
    }])
    return(
        <div>
            <Router>
                <UserParent path="/" 
                users={users}
                setusers={setusers}
                />
                <CreateUser 
                    users={users} 
                    setusers={setusers}
                    path="/create"
                />
                <UpdateUser 
                    users={users} 
                    setusers={setusers}
                    path="/update/:id"
                />
            </Router>
        </div>
    )
}

export default FormSelect;