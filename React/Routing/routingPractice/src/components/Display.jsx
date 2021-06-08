import React from 'react'

const Display= ({param,color,bkcolor}) =>{

    
    const mystyle={
        color:color,
        backgroundColor:bkcolor,
    }

    return(
        
        <div style={mystyle}>
            {isNaN(param) ? <h1>The word is: {param} </h1>: <h1>The number is: {param}</h1>}
        </div>
    )
}
export default Display;