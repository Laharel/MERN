import React, { useEffect, useState } from 'react';
import PlayerList from './PlayerList';
import axios from 'axios'
import { Router,Link } from '@reach/router';
import AddPlayer from './AddPlayer';
import ManagePlayers from './ManagePlayers';

const MainPlayer = props => {

    const [players, setPlayers] = useState([{
        name:"",
        position:"",
        status:3,
    }])
    const [mainButton, setMainButton] = useState(1)
    const [secondButton, setSecondButton] = useState(1)

    // Manage Players button | Manager Player status button - mainbutton
    // router:
        // players list (mainbutton, setMainbutton, secondbutton, setSecondbutton,
        //              playerlist, setplayerlist)
            // List button | Add Player button - secondbutton
            // deletePlayer
        // manage players (mainbutton)
        // addPlayer (mainbutton, secondbutton)
            // List button | Add Player button - secondbutton
            // AddForm

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                setPlayers(response.data.players)
                console.log(players)
            })
            .catch(err=> console.log(err))
    }, [players])
    return (
        <div>
            <span>
                <Link to="/players/list">
                    Manage Players
                </Link>
                |
                <Link to={`/status/game/${1}`}>
                Manage Player Status
                </Link>
            </span>

            <Router>

                <PlayerList 
                    path="/players/list"
                    mainButton={mainButton} 
                    setMainButton={setMainButton}
                    secondButton={secondButton}
                    setSecondButton={setSecondButton}
                    players={players}
                    setPlayers={setPlayers}
                    default
                />

                <AddPlayer 
                    path="/players/addplayer"
                    players={players} 
                    setPlayers={setPlayers} 
                />

                <ManagePlayers 
                    path="/status/game/:gameid"
                    players={players}
                    setPlayers={setPlayers}
                />
            </Router>


        </div>
    );
};



export default MainPlayer;