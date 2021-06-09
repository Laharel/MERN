import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpdateStatus = ({player, gameButton}) => {
    // playerStatus(player, gameButton, setStatus)
    const [updatedPlayer, setUpdatedPlayer] = useState({
        name:"",
        position:"",
        status1:3,
        status2:3,
        status3:3
    })

    useEffect(()=>{
        setUpdatedPlayer(player)
    },[player])

    const setStatus = (e) => {
        if(gameButton === '1'){
            if(e.target.name === '1'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status1: 1
                })

            }
            if(e.target.name === '2'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status1: 2
                })
            }
            if(e.target.name === '3'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status1: 3
                })
            }
        }
        // second game
        else if(gameButton === '2'){
            if(e.target.name === '1'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status2: 1
                })
            }
            if(e.target.name === '2'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status2: 2
                })
            }
            if(e.target.name === '3'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status2: 3
                })
            }
            console.log(updatedPlayer.status2)
        }
        // third game
        else if(gameButton === '3'){
            if(e.target.name === '1'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status3: 1
                })
            }
            if(e.target.name === '2'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status3: 2
                })
            }
            if(e.target.name === '3'){
                setUpdatedPlayer({
                    ...updatedPlayer,
                    status3: 3
                })
            }
            console.log(updatedPlayer.status3)
        }
        axios.put(`http://localhost:8000/api/players/update/${player._id}`,{
            name: updatedPlayer.name,
            status1: updatedPlayer.status1,
            status2: updatedPlayer.status2,
            status3: updatedPlayer.status3,
            position: updatedPlayer.position
        })
            .then(response => {
                console.log(response.data.player)
            })
            .catch(err=> console.log(err))
    }

    const secondClickedStyle = {
        color: 'white',
        backgroundColor: 'red'
    }
    const firstClickedStyle = {
        color: 'white',
        backgroundColor: 'green'
    }
    const lastClickedStyle = {
        color: 'black',
        backgroundColor: 'yellow'
    }

    return (
        <div>
            {gameButton==='1'&& 
                <form onSubmit={setStatus}>
                    {player.status1===1? 
                        <button name="1" style={firstClickedStyle} onClick={setStatus}>Playing</button>
                        :
                        <button name="1" onClick={setStatus}>Playing</button>
                    }
                    {player.status1===2? 
                        <button name="2" style={secondClickedStyle} onClick={setStatus}>Not Playing</button>
                        :
                        <button name="2"onClick={setStatus}>Not Playing</button>
                    }
                    {player.status1===3?
                        <button name="3" style={lastClickedStyle} onClick={setStatus}>Undecided</button>
                        :
                        <button name="3" onClick={setStatus}>Undecided</button>
                    }
                </form>
            }     
            {gameButton==='2'&& 
                <form onSubmit={setStatus}>
                    {player.status2===1? 
                        <button name="1" style={firstClickedStyle} onClick={setStatus}>Playing</button>
                        :
                        <button name="1" onClick={setStatus}>Playing</button>
                    }
                    {player.status2===2? 
                        <button name="2" style={secondClickedStyle} onClick={setStatus}>Not Playing</button>
                        :
                        <button name="2" onClick={setStatus}>Not Playing</button>
                    }
                    {player.status2===3?
                    
                    <button name="3" style={lastClickedStyle} onClick={setStatus}>Undecided</button>
                    :
                    <button name="3" onClick={setStatus}>Undecided</button>
                    }
                </form>
            }     
            {gameButton==='3'&& 
                <form onSubmit={setStatus}>
                    {player.status3===1? 
                        <button name="1" style={firstClickedStyle} onClick={setStatus}>Playing</button>
                        :
                        <button name="1" onClick={setStatus}>Playing</button>
                    }
                    {player.status3===2? 
                        <button name="2" style={secondClickedStyle} onClick={setStatus}>Not Playing</button>
                        :
                        <button name="2" onClick={setStatus}>Not Playing</button>
                    }
                    {player.status3===3?
                    <button name="3" style={lastClickedStyle} onClick={setStatus}>Undecided</button>
                    :
                    <button name="3" onClick={setStatus}>Undecided</button>
                    }
                </form>
            }     
        </div>
    );
};


export default UpdateStatus;