import React from 'react'
import Obiwan from './images/Obiwan.png'
const NotFound=()=>{
    return(
        <div>
        <h3>These aren't the droids you're looking for</h3>
        <img src={Obiwan} alt="Obi-Wan Kenobi" height="450px" />
        </div>
    )
}
export default NotFound;