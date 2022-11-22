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

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      console.log(values);
      let result;
      let operationValue = this.state.operation;

      switch (operationValue) {
        case '/':
          result = values[0] / values[1];
          break;
        case '*':
          result = values[0] * values[1];
          break;
        case '-':
          result = values[0] - values[1];
          break;
        case '+':
          result = values[0] + values[1];
          break;
        case '.':
          result = values[0] + '.' + values[1];
          break;
        default:
          values[0] = 0;
          break;
      }

      console.log(values);

      this.setState({
        displayValue: result,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true || !equals,
        values: [result, 0] || [0, 0],
      });
    }
  }

  addDigit(digit) {
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return this.state.displayValue;
    }
    // if value is equal to 0 or clear display is false
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;
    // if clearDisplay is true or current diggit
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    // current value plus new diggit added
    const displayValue = currentValue + digit;
    this.setState({ displayValue, clearDisplay: false });

    if (digit !== '.') {
      const indice = this.state.current;
      // converts display value into a floating-point number
      const newValue = parseFloat(displayValue);
      // takes the initial state of value and create a new array of values
      const values = [...this.state.values];
      // Added the display value into the current indice before or after the operation
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
