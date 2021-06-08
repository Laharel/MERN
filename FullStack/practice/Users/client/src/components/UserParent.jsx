import React, {useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const UserParent = ({users, setusers}) => {
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/user")
            .then(res => setusers(res.data))
            .catch(err => console.log(err))
    }, [setusers])
    const deleteHandler = UserId => {
        const tempArr = users.filter( User => User._id !== UserId);
        setusers(tempArr);
    }

    return(
        <div>
            <h1><Link to={"/create"}>Click Here</Link> to create a new User!</h1>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Actions</td>
                    </tr>
                {
                    users.map((User, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>
                                    {User.fname}
                                </td>
                                <td>
                                    {User.lname}
                                </td>
                                <td><button><Link to={`/update/${User._id}`}>EDIT</Link></button><DeleteButton deleteId={User._id} callback={deleteHandler}/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                
        </div>
    )
}

export default UserParent;