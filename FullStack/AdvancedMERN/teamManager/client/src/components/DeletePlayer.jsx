import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react';

const DeletePlayer = props => {
    const {id, setPlayers, players} = props
    
    const handleDelete = (e) =>{
        e.preventDefault()
        window.confirm('Are you sure you wish to delete this item?') ? onConfirm("confirm") : onCancel("cancel") 
    }
    const onConfirm =()=>{
                axios.delete(`http://localhost:8000/api/players/delete/${id}`)
            .then(res => {
                let arr = players.filter(player => player._id !== id)
                console.log(arr)
                console.log(res.data)
                setPlayers(arr)
                navigate("/players/list")
            })
            .catch(err => console.log(err))
    }
    const onCancel =()=>{
        navigate("/")
    }
    return (
        <div>
            <input type="button" name="" id="" onClick={handleDelete} value="Delete"/>
        </div>
    );
};


export default DeletePlayer;