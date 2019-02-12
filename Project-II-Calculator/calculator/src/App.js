import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton'
import './App.css';

const initialState = {
  number: 0,
  display: '0'
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      display: '0'
    }
  }

  handleNumberClick = props => {
    const newState = {...this.state, number: props};
    if (newState.display === '0') {
      this.setState({newState, display: newState.number.toString()});
    } else {
      this.setState({newState, display: `${this.state.display}${newState.number}`});
    }
  }

  handleClearDisplay = props => {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay display={this.state.display}/>
        <div className="calculator-row">
          <ActionButton className="flex3 clear" text="clear" onClick={(props) => this.handleClearDisplay(props)}></ActionButton>
          <ActionButton className="flex1">÷</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton text="7" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <NumberButton text="8" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <NumberButton text="9" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <ActionButton className="flex1">x</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton text="4" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <NumberButton text="5" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <NumberButton text="6" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <ActionButton className="flex1">-</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton text="1" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <NumberButton text="2" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <NumberButton text="3" onClick={(props) => this.handleNumberClick(props)}></NumberButton>
          <ActionButton className="flex1">+</ActionButton>
        </div>
        <div className="calculator-row">
          <ActionButton className="flex3" text="0" onClick={(props) => this.handleNumberClick(props)}></ActionButton>
          <ActionButton className="flex1">=</ActionButton>
        </div>
      </div>
    );
  }
};

export default App;
