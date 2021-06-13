import React, { useEffect, useState } from 'react';
import DeletePlayer from './DeletePlayer';

const PlayersList = props => {
    const {players, setPlayers} = props
    const [list, setList] = useState([])

    useEffect( ()=> {
        setList(players)
    }, [players, setPlayers])

    const tableStyle ={
        border:'1px solid black',
        borderCollapse: 'collapse'
    }

    return (
        <div>
            {list && 
                <div>
                    <table style={tableStyle}>
                        <tr>
                            <th style={tableStyle} >Player Name</th>
                            <th style={tableStyle} >Preferred Position</th>
                            <th style={tableStyle}>Actions</th>
                        </tr>
                            {list.map(player => {
                                return (
                                    <tr>
                                        <td style={tableStyle}>{player.name}</td>
                                        <td style={tableStyle}>{player.position}</td>
                                        <td style={tableStyle}>
                                            <DeletePlayer
                                            id={player._id}
                                            players={list}
                                            setPlayers={setPlayers}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
            }
        </div>
    );
};


export default PlayersList;