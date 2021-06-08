import React,{useState} from 'react';
import BoxDisplay from './BoxDisplay';
import BoxForm from './BoxForm';

const BoxParent =(props) =>{
    const styles = {
        display:'flex',
        flexWrap:'wrap'
    }    
    const [boxes,setBoxes] = useState([{
        size:"100px",
        color:"red",
        }])
    return (
        <div>
            <BoxForm boxes={boxes} setBoxes={setBoxes} />
            <div style={styles}>
                <BoxDisplay boxes={boxes} />
            </div>
        </div>
    );
};
export default BoxParent;