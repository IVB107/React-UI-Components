import React from 'react';
import './Button.css';

const NumberButton = props => {
    // const text = props.children;
    const classes = props.className;
    return <div onClick={() => props.onClick(props.text)} className={`number-button ${classes}`}>{ props.text }</div> 
}

export default NumberButton;