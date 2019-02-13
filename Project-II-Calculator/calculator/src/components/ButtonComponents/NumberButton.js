import React from 'react';
import './Button.css';

const NumberButton = props => {
    const text = props.children;
    const classes = props.className;
    return <div className={`number-button ${classes}`}>{ text }</div> 
}

export default NumberButton;