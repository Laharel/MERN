import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import PlayerForm from './PlayerForm';

const CreatePlayer = ({setPlayers, players}) => {
    const [name, setName] = useState()
    const [position, setPosition] = useState()
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/players/new`, {name: name,position: position})
            .then(newPlayer => {
                setPlayers([...players, newPlayer.data.player])
                navigate("/")
            })
            .catch(err=> {
                setError(err.response.data.error.errors.name.message)
                console.log(err.response.data.error.errors.name.message)
            })
    }
    return (
        <div>
            {/* call form(name, position, handleSubmit, setName, setPosition) */}
            <p>Add Player</p>
            <PlayerForm name={name} setName={setName} setPosition={setPosition} handleSubmit={handleSubmit} error={error} />
        </div>
    );
};


export default CreatePlayer;