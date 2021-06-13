import React, { useEffect, useState } from 'react';
import {Router,Link} from '@reach/router'
import axios from 'axios'
import PlayersList from './PlayersList';

const ManagePlayers = props => {
    // list of players
    const [players, setPlayers] = useState([{
        name:""
    }])
    // get all players from DB
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/players/list")
            .then(res => {
                console.log(res.data.players)
                setPlayers(res.data.players)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <span>
                <Link to="/players/game/1" >Game 1</Link>|
                <Link to="/players/game/2" >Game 2</Link>|
                <Link to="/players/game/3/">Game 3</Link>
            </span> 
            <Router>            
                <PlayersList path="/players/list" players={players} setPlayers={setPlayers} />
            </Router>
        </div>
    );
};


export default ManagePlayers;