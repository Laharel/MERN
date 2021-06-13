import React, { useEffect, useState } from 'react';

const PlayerForm = props => {
    const {handleSubmit, name, setName, position, setPosition, error} = props
    const [message, setMessage] = useState("")
    useEffect( ()=> {
        setMessage(error)
    }, [error])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {message && 
                <p style={{color:'red'}}>{message}</p>
                }
                <div>
                    <label htmlFor="">
                        Name:
                    </label>
                    <input type="text" name="" id="" value={name} onChange={e=>{setName(e.target.value)}} />

                </div>
                <div>
                    <label htmlFor="">
                        Preferred Position:
                    </label>
                    <input type="text" name="" id="" value={position} onChange={e=>{setPosition(e.target.value)}} />
                </div>    
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};


export default PlayerForm;