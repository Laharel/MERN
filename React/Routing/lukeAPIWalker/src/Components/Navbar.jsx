import React,{useState} from 'react';
import { navigate } from '@reach/router';
const Navbar = () => {
    const[id,setID] = useState()
    const[selected,setSelected] = useState()
    const submit=(e)=>{
        e.preventDefault();
        console.log(selected)
        if (selected === "people"){
            navigate(`/people/${id}`)
        }else if (selected === "films"){
            navigate(`/films/${id}`)
        }else if (selected === "starships"){
            navigate(`/starships/${id}`)
        }else if (selected === "vehicles"){
            navigate(`/vehicles/${id}`)
        }else if (selected === "species"){
            navigate(`/species/${id}`)
        }else{
            navigate(`/planets/${id}`)
        }
    }

    return(
        <div>
            <form onSubmit={ submit }>
                <label>Search for:</label>
                <select value={selected} onChange={e => setSelected(e.target.value)}>
                    <option style={{display: "none"}}></option>
                    <option value="people">People</option>
                    <option value="flims">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID: </label>
                <input type="text" onChange={ (e) => setID(e.target.value) } />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Navbar; 