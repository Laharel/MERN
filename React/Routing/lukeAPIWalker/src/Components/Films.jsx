import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Films= ({id}) =>{
    const [SW,setSW]=useState({
        title :"",
        director :"",
        producer :"",
        release_date :"",
        opening_crawl :""
    })
    useEffect(()=>{
        axios.get("https://swapi.dev/api/films/"+id)
            .then( res => setSW(res.data))
            .catch( err => console.log(err));
    })
    return(
        <div>
            <h1>{SW.title }</h1>
            <h5>Director : {SW.director }</h5>
            <h5>Producer : {SW.producer }</h5>
            <h5>Release Date : {SW.release_date }</h5>
            <h5>Opening Crawl : {SW.opening_crawl }</h5>
        </div>
    )
    }
export default Films;