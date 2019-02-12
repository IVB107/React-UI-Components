import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton'
import './App.css';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <div className="calculator-row">
        <ActionButton className="flex3 clear">clear</ActionButton>
        <ActionButton className="flex1">÷</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton>7</NumberButton>
        <NumberButton>8</NumberButton>
        <NumberButton>9</NumberButton>
        <ActionButton className="flex1">x</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton>4</NumberButton>
        <NumberButton>5</NumberButton>
        <NumberButton>6</NumberButton>
        <ActionButton className="flex1">-</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <ActionButton className="flex1">+</ActionButton>
      </div>
      <div className="calculator-row">
        <ActionButton className="flex3">0</ActionButton>
        <ActionButton className="flex1">=</ActionButton>
      </div>
    </div>

  );
};

export default App;
