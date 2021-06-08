import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Ships= ({id}) =>{
    const [SW,setSW]=useState({
        name :"",
        manufacturer :"",
        model :"",
        starship_class :"",
        hyperdrive_rating :""
    })
    useEffect(()=>{
        axios.get("https://swapi.dev/api/starships/"+id)
            .then( res => setSW(res.data))
            .catch( err => console.log(err));
    })
    return(
        <div>
            <h1>{SW.name }</h1>
            <h5>Manufacturer : {SW.manufacturer }</h5>
            <h5>Model: {SW.model }</h5>
            <h5>Starship Class : {SW.starship_class }</h5>
            <h5>Hyperdrive Rating : {SW.hyperdrive_rating }</h5>
        </div>
    )
    }
export default Ships;