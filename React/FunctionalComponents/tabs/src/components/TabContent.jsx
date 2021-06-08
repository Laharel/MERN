import React, { useState } from 'react';

const TabContent = ({tabs}) => {

    const [clicked, setClicked] = useState(0)

    const handleClick = (e, id) => {
        e.preventDefault()
        setClicked(id)
    }
    const checkClick = (id) =>{
        if(id === clicked){
            return true
        }
        else{
            return false
        }
    }
    const clickedStyle = {
        
        margin:"10px",
        backgroundColor: "black",
        color: "white"
    }
    const unclickedStyle = {
        margin:"10px",
        backgroundColor: "white"
    }


    return (
        <div>
            <span>
                {tabs.map((tab, idx) => {
                    return (
                        <button key={idx} onClick={ e => handleClick(e, idx) } style={checkClick(idx)? clickedStyle:unclickedStyle}>
                            {tab.label}
                        </button>
                    )
                })}
            </span>
            <span>
            {tabs.map((tab, idx) => {
                    return(
                        <span>
                        {checkClick(idx)? 
                            <p>{tab.content}</p>
                            :
                            ""
                        }
                        </span>

                    )
                })}
            </span>


        </div>
    );
};



export default TabContent;