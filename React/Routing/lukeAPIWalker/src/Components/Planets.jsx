import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Planets= ({id}) =>{
    const [SW,setSW]=useState({
        name:"",
        climate:"",
        terrain:"",
        surface_water:"",
        population:0
    })
    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+id)
            .then( res => setSW(res.data))
            .catch( err => console.log(err));
    })
    return(
        <div>
            <h1>{SW.name}</h1>
            <h5>Climate: {SW.climate}</h5>
            <h5>Terrain: {SW.terrain}</h5>
            <h5>Surface Water: {SW.surface_water}</h5>
            <h5>Population: {SW.population}</h5>
        </div>
    )
    }
export default Planets;