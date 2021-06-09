import React, { useEffect, useState } from 'react';
import DeletePlayer from './DeletePlayer';
import SecondButton from './SecondButton';

const PlayerList = ({secondButton, setSecondButton, players, setPlayers}) => {
    const tableStyle ={
        border:'1px solid black',
        borderCollapse: 'collapse'
    }
    const [playerList, setPlayerList] = useState([{
        name:"",
        position:"",
        status:3,
    }])
    
    useEffect( ()=> {
        setPlayerList(players)
    }, [players])
    return (
        <div>
            <div>
            <SecondButton 
                secondButton={secondButton} 
                setSecondButton={setSecondButton} 
            />
            </div>

        {/* Table */}
        {playerList && 
            <table style={tableStyle}>
                <tr style={tableStyle}>
                    <th style={tableStyle}>Player Name</th>
                    <th style={tableStyle}>Preferred Position</th>
                    <th style={tableStyle}>Actions</th>
                </tr>
                {players.map(player => {
                    return(
                        <tr>
                            <td style={tableStyle}>{player.name}</td>
                            <td style={tableStyle}>{player.position}</td>
                            <td style={tableStyle}>
                                <DeletePlayer 
                                    players={playerList} 
                                    setPlayers={setPlayers} 
                                    id={player._id} 
                                />
                            </td>
                        </tr>
                    )
                })}
            </table>

        }

        </div>
    );
};

export default PlayerList;