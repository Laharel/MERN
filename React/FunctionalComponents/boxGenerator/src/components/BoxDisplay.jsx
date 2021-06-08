import React from 'react';

const BoxDisplay =({boxes}) =>{
    const renderBoxes = (box , i) =>{
        const mystyle = {
            backgroundColor: box.color,
            width: box.size+"px",
            height: box.size+"px",
            margin: 10+"px"
        };
        return(
            <div key={i} style={mystyle}></div>
        );
    };
    return (
        boxes.map(renderBoxes)
    );
};
export default BoxDisplay;