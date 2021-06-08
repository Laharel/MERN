import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Form = props => {
    // const {type, id,person, planet, setPerson, setPlanet, setType, setId} = useContext(MyContext)
    const [type, setType] = useState()
    const [id, setId] = useState()
    const history = useHistory()

    // routes to DisplayStar
    const action = (e) => {
        e.preventDefault()
        if(type && id){
            history.push(`/${type}/${id}/`)
        }
        else {
            history.push("/")
        }
    }
    return (
        <div>
            <form onSubmit={action}>
                <label htmlFor="type">
                    Search for: 
                    <select name="type" id="type" onChange={e => setType(e.target.value)}>
                        <option style={{display: "none"}}></option>
                        <option value="planets">planets</option>
                        <option value="people">people</option>
                    </select>
                </label>
                <label htmlFor="id"> ID
                    <input type="text" name="id" id="id" onChange={e => setId(e.target.value)} />
                </label>
                <button>Search</button>
                
            </form>
        </div>
    );
};



export default Form;