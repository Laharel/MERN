import React, { useEffect, useState } from 'react';
import {Router,Link} from '@reach/router'
import axios from 'axios'
import PlayersList from './PlayersList';
import CreatePlayer from './CreatePlayer';

const ManagePlayers = props => {
    // list of players
    const [players, setPlayers] = useState([{
        name:"",
        position:""
    }])
    // get all players from DB
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                console.log(res.data.players)
                setPlayers(res.data.players)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <span>
                <Link to="/" >List</Link>|
                <Link to="/new">Add Players</Link>
            </span> 
            <Router>            
                <PlayersList path="/" players={players} setPlayers={setPlayers} />
                <CreatePlayer path="/new" players={players} setPlayers={setPlayers} />
            </Router>
        </div>
    );
};


export default ManagePlayers;