import React from 'react';
import './Button.css';
const Button=({val,handleClick})=>{
    return (
        <div className="button-wrapper" onClick={handleClick(val)}>
            {val}
        </div>
    );
};

export default Button;

