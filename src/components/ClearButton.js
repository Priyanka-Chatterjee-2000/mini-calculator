import React from 'react'
import './ClearButton.css'
function ClearButton(props) {
    return (
        <div className="clear-btn" onClick={props.handleClear}>
           {props.children} 
        </div>
    )
}

export default ClearButton
