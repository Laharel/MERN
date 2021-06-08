import React,{useState} from 'react';

const BoxForm =({boxes,setBoxes}) =>{
    let [size, setsize] = useState("");
    let [color, setcolor] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        const Box = { size, color};
        setBoxes([...boxes, Box]);
        document.getElementById("boxmaker").reset();
    }

    return (
        <form onSubmit={submit} id='boxmaker'>
            <div>
                <label>Color: </label>
                <input type="text" onChange={ (e) => setcolor(e.target.value) } />
                <label> Size: </label>
                <input type="number" onChange={ (e) => setsize(e.target.value) } />
            </div>
            <button>Add</button>
        </form>
    );
};
export default BoxForm;