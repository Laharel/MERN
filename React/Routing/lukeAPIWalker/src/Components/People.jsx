import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { navigate} from '@reach/router'
const People= ({id}) =>{
    const [SWPL,setSWPL]=useState({name:""});
    const [SWP,setSWP]=useState({
        name:"",
        height:0,
        mass:0,
        hair_color:"",
        skin_color:"",
        homeworld:""
    })
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+id)
            .then( res => setSWP(res.data))
            .catch( err => console.log(err));
        axios.get(`${SWP.homeworld}`)
            .then( res => setSWPL(res.data))
            .catch( err => console.log(err));
    })
    const click=(e)=>{
        const Pid = SWP.homeworld.match(/\d+/)[0];
        navigate(`/planets/${Pid}`)

    }
    
    return(
        <div>
            <h1>{SWP.name}</h1>
            <h2 onClick={click}>Home World:{SWPL.name} </h2>
            <h5>Height: {SWP.height} cm</h5>
            <h5>Mass: {SWP.mass} kg</h5>
            <h5>Hair Color: {SWP.hair_color}</h5>
            <h5>Skin Color: {SWP.skin_color}</h5>
        </div>
    )
}
export default People;