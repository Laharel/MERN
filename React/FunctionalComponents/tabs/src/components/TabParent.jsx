import React from 'react';
import TabContent from './TabContent';

const TabParent =() =>{
    const mystyle ={
        display:'flex',
        justifyContent:'center',
    }

    const tabs = [
        {label:"Q.1", content: "is Earth round?"},
        {label:"Q.2", content: "1+1 = ?"},
        {label:"Q.3", content: "what's your name?"}
    ];
    return (
        <div style={mystyle}> 
            <TabContent tabs={tabs}/>               
        </div>
    );
};
export default TabParent;