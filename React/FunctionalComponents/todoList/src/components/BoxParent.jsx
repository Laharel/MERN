import React, { useState } from 'react';
import BoxDisplay from './BoxDisplay'
import BoxForm from './BoxForm'


const BoxParent = props => {
    const [testBox, setTestBox] = useState({
        color: "#000000",
        width: "50",
        height: "50",
    })

    const [boxes, setBoxes] = useState([{
        color: "",
        size: 0
    }])

    return (
        <div>
            <BoxForm boxes={boxes} setBoxes={setBoxes} />
            <BoxDisplay boxes={boxes} />
        </div>
    );
};



export default BoxParent;