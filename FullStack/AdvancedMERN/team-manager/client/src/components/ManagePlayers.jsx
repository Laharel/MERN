import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router'
import UpdateStatus from './UpdateStatus';

const ManagePlayers = ({players, gameid}) => {
    const tableStyle ={
        border:'1px solid black',
        borderCollapse: 'collapse'
    }
    const [gameButton, setGameButton] = useState(1)
    const [playerList, setPlayerList] = useState([{
        name:"",
        position:"",
        status:3,
    }])
    // create three game_1: Number in player model
    // players.map(
    //   playername
    // playerStatus(player, gameButton, setStatus)
    // )

    useEffect( ()=> {
        setGameButton(gameid)
        setPlayerList(players)
        console.log(players)
    }, [players, gameid])


    // setStatus(e) to update player status

    return (
        <div>
            <h1>Player Status - Game {gameButton}</h1>
            <Link to="/status/game/1">
            Game 1
            </Link>
            |
            <Link to="/status/game/2">
            Game 2
            </Link>
            |
            <Link to="/status/game/3">
            Game 3
            </Link>
            {playerList && 
            <table style={tableStyle}>
                <tr style={tableStyle}>
                    <th style={tableStyle}>Player Name</th>
                    <th style={tableStyle}>Actions</th>
                </tr>
                {playerList.map(player=> {
                    return(
                    <tr style={tableStyle}>
                        <td style={tableStyle}>{player.name}</td>
                        <span>
                            {/* buttoncomponent */}
                            <UpdateStatus 
                                gameButton={gameButton} 
                                player={player} 
                                playerList={playerList} 
                                setPlayerList={setPlayerList} 
                            />
                        </span>
                    </tr>
                    )
                })}
            </table>
            
            }
        </div>
    );
};


export default ManagePlayers;