import React from 'react';
import './Button.css';

const ActionButton = props => {
    const text = props.children;
    const classes = props.className;
    return <div className={`action-button ${classes}`}>{ text }</div> 
}

export default ActionButton;