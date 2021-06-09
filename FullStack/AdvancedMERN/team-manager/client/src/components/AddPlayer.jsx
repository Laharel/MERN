import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import SecondButton from './SecondButton'

const AddPlayer = ({players, setPlayers,secondButton, setSecondButton}) => {
    const [player, setPlayer] = useState({
        name:"",
        position:"",
    })
    const [name, setName] = useState("")
    // changeHandler
    const changeHandler = (e) => {
        if(e.target.name === 'name'){
            setPlayer({...player, name:e.target.value})
            setName(e.target.value)


        }
        if(e.target.name === 'position'){
            setPlayer({...player, position: e.target.value})
        }
    }
    // axios update
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(player.name)
        axios.post("http://localhost:8000/api/players/create", 
        player
        )
            .then(response => {
                console.log(response.data.player)
                setPlayers([...players, response.data.player])
                navigate("/players/list")
            })
            .catch(err => {
                setError(err.response.data.error.errors.name.message)
                console.log(err.response.data.error.errors.name.message)
            })
    }
    const [error, setError] = useState("")
    return (
        <div>
            {/* PlayerForm */}
            <SecondButton 
                secondButton={secondButton} 
                setSecondButton={setSecondButton} 
            />
            <form onSubmit={handleSubmit}>
                {error && 
                <p>{error}</p>
                }
                <span>
                    <label htmlFor="">Player Name:</label>
                    <input type="text" name="name" id="" onChange={changeHandler}/>
                </span>
                <span>
                    <label htmlFor="">Preferres Position:</label>
                    <input type="text" name="position" id="" onChange={changeHandler}/>
                </span>
                {name.length>1?
                <button>Add</button>
                :
                <button disabled="true">Add</button>
            }

            </form>
        </div>
    );
};


export default AddPlayer;