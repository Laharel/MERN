import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Vehicles= ({id}) =>{
    const [SW,setSW]=useState({
        name :"",
        manufacturer :"",
        model :"",
        vehicle_class :"",
        max_atmosphering_speed :""
    })
    useEffect(()=>{
        axios.get("https://swapi.dev/api/vehicles/"+id)
            .then( res => setSW(res.data))
            .catch( err => console.log(err));
    })
    return(
        <div>
            <h1>{SW.name }</h1>
            <h5>Manufacturer : {SW.manufacturer }</h5>
            <h5>Model: {SW.model }</h5>
            <h5>Vehicle Class  : {SW.vehicle_class }</h5>
            <h5>Max Atmosphering Speed : {SW.max_atmosphering_speed }</h5>
        </div>
    )
    }
export default Vehicles;