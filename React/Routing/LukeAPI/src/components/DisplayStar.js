import React, { useContext, useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development';

const DisplayStar = ({match}) => {
    const type = match.params.type
    const id = match.params.id
    const [err, setErr] = useState({
        message: "These aren't the droids you're looking for",
        active: false,
        img_url: process.env.PUBLIC_URL+'/kenobi.jpg'
    })

    const [person, setPerson] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect( ()=> {
        handleAPI()
    }, [type])
    useEffect( ()=> {
        handleAPI()
    }, [id])
    

const handleAPI = ()=> {
    if(type == "people" && id){
        axios.get("https://swapi.dev/api/people/"+id)
            .then(res => {
                setPerson({
                    name: res.data.name,
                    height: res.data.height,
                    mass: res.data.mass,
                    hairColor: res.data.hair_color,
                    skinColor: res.data.skin_color
                })
                setErr({
                    ...err,
                    active: false
                })
            }

            )
            .catch(error => {
                console.log(error)
                setErr({
                    ...err,
                    active: true
                })
            })

    }
    else if(type == "planets" && id) {
        axios.get("https://swapi.dev/api/planets/"+id)
            .then(res => {
                setPlanet({
                    name: res.data.name,
                    climate: res.data.climate,
                    terrain: res.data.terrain,
                    surfaceWater: res.data.surface_water,
                    population: res.data.population,
                });
                setErr({
                    ...err,
                    active: false
                })
            }
                )
            .catch(error => {
                console.log(error)
                setErr({
                    ...err,
                    active: true
                })
            })
    }  
}

    return (
        <div>
            {err.active? 
                <div>
                    <p style={{color:"red"}}>{err.message}</p>
                    <img width="200px" src={err.img_url} alt="" />
                </div>

                : 
                ""

            }
            {(type && type == "people")? 
            <div>
                <h1>{person.name}</h1>
                <h4>Height: <p style={{fontWeight: "normal", display: "inline"}}>{person.height} cm</p> </h4>
                <h4>Mass: <p style={{fontWeight: "normal", display: "inline"}}>{person.mass} kg</p> </h4>
                <h4>Hair Color: <p style={{fontWeight: "normal", display: "inline"}}>{person.hairColor} </p> </h4>
                <h4>Skin Color: <p style={{fontWeight: "normal", display: "inline"}}>{person.skinColor} </p> </h4>
            </div>

            :
            <div>
                <h1>{planet.name}</h1>
                <h4>Climate: <p style={{fontWeight: "normal", display: "inline"}}>{planet.climate} </p> </h4>
                <h4>Terrain: <p style={{fontWeight: "normal", display: "inline"}}>{planet.terrain} </p> </h4>
                <h4>Surface Water : <p style={{fontWeight: "normal", display: "inline"}}>{planet.surfaceWater} </p> </h4>
                <h4>Population : <p style={{fontWeight: "normal", display: "inline"}}>{planet.population} </p> </h4>
            </div>            }
        </div>
    );
};


export default DisplayStar;