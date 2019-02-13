import React from 'react';
import './Button.css';

const ActionButton = props => {
    const classes = props.className;
    return <div onClick={() => props.onClick(props.text)} className={`action-button ${classes}`}>{ props.text }</div> 
}

export default ActionButton;