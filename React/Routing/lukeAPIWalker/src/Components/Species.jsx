import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Species= ({id}) =>{
    const [SW,setSW]=useState({
        name :"",
        average_lifespan :"",
        average_height :"",
        eye_colors:"",
        hair_colors:"",
        classification :"",
        designation :"",
        language :""
    })
    useEffect(()=>{
        axios.get("https://swapi.dev/api/species/"+id)
            .then( res => setSW(res.data))
            .catch( err => console.log(err));
    })
    return(
        <div>
            <h1>{SW.name }</h1>
            <h5>Average Lifespan : {SW.average_lifespan }</h5>
            <h5>Average Height : {SW.average_height }</h5>
            <h5>Eye Colors : {SW.eye_colors }</h5>
            <h5>Hair Colors : {SW.hair_colors }</h5>
            <h5>Classification : {SW.classification }</h5>
            <h5>Designation: {SW.designation }</h5>
            <h5>Language : {SW.language }</h5>
        </div>
    )
    }
export default Species;