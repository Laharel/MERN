import React, { useEffect, useState } from 'react';

const PokemonAPI = props => {

    const [PokemonList, setPokemonList] = useState([{}])
    const [clicked, setClicked] = useState()


    const handleClick = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            // return the response.json()
            return response.json()
        })
        .then(response => {
            // set PokemonList to response.results
            setPokemonList(response.results)
        })    }


    return (
        <div>
            <button onClick={handleClick}>Fetch Pokemons</button>
            <ul>
            {PokemonList.filter(pokemon => pokemon.name).map(pokemon =>{
                return (
                    <li>{pokemon.name}</li>
                )
            })}
            </ul>

        </div>
    );
};

export default PokemonAPI;