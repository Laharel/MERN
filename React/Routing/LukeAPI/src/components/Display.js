import React, { useEffect } from 'react';

const Display = ({match}) => {


    const setStyle = () => {
        let params = match.params
        if(params.color && params.bkcolor){
            let displayStyle ={
                color: params.color,
                backgroundColor: params.bkcolor,
                width: "100%",
                height: "50px"
            }
            return displayStyle
        }
        else if (params.color && !params.bkcolor){
            let displayStyle = {
                color: params.color
            }
            return displayStyle
        } 
        else {
            let displayStyle={
                color: "black"
            }
        }
    }
    

    return (
        <div>
            <div style={setStyle()}>
                {isNaN(match.params.param)? <p>The word is: {match.params.param}</p>:<p>The number is: {match.params.param}</p>}   
            </div>
        </div>
    );
};

export default Display;