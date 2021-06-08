import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BoxForm = ({boxes, setBoxes}) => {

    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleSize = (e) =>{
        setSize(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const box = {
            color: color,
            size: size,
        }
        setBoxes(
            [...boxes, box]
        )
        setColor("")
        setSize(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="color" name="color" id="color" onChange={handleColor} value={color}/>
                <input type="text" name="size" id="size" onChange={handleSize} value={size}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default BoxForm;