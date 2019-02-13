import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    // const { value } = props;
    // const value = props.value
    return <div className="calculator-display">{props.display}</div>
}

export default CalculatorDisplay;