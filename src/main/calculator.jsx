import React, { Component } from 'react';
import './calculator.css';
import Button from '../components/button/button';
import Display from '../components/display/display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};
class Calculator extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }
  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {}

  addDigit(digit) {
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + digit;
    this.setState({ displayValue, clearDisplay: false });

    if (digit !== '.') {
      const indice = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[indice] = newValue;
      this.setState({ values });
    }
  }
  render() {
    return (
      <div className='calculator'>
        <Display value={this.state.displayValue} />
        <Button label='AC' click={this.clearMemory} triple />
        <Button label='/' click={this.setOperation} operation />
        <Button label='7' click={this.addDigit} />
        <Button label='8' click={this.addDigit} />
        <Button label='9' click={this.addDigit} />
        <Button label='*' click={this.setOperation} operation />
        <Button label='4' click={this.addDigit} />
        <Button label='5' click={this.addDigit} />
        <Button label='6' click={this.addDigit} />
        <Button label='-' click={this.setOperation} operation />
        <Button label='1' click={this.addDigit} />
        <Button label='2' click={this.addDigit} />
        <Button label='3' click={this.addDigit} />
        <Button label='+' click={this.setOperation} operation />
        <Button label='0' click={this.addDigit} double />
        <Button label='.' click={this.addDigit} />
        <Button label='=' click={this.setOperation} operation />
      </div>
    );
  }
}

export default Calculator;
