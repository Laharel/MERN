import React from 'react';
import PropTypes from 'prop-types';

const BoxDisplay = ({boxes}) => {
    return (
        <div>
            {boxes.map((box, idx) => {
                return (
                    <div key={idx} style={{backgroundColor: box.color,
                        width:box.size+"px", height:box.size+"px", display: "flex"}}>  
                    </div>
                )
            })}

        </div>

    );
};

export default BoxDisplay;