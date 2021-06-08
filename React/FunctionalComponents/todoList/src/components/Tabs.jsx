import React, { useState } from 'react';

const Tabs = ({tabs}) => {

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
        backgroundColor: "black",
        color: "white"
    }
    const unclickedStyle = {
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



export default Tabs;