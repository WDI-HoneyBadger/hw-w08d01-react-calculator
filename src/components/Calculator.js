import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import tileData from '../data/tileData'

class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      inputOne: '',
      inputTwo:'',
      operator: '',
      displayNum: 0
    }
  }

  getInput(symbol, isNumber) {
  if((isNumber === true || symbol === '.') && this.state.operator === ''){
      const newValue = this.state.inputOne.concat(symbol);
      this.setState({
        displayNum: newValue,
        inputOne: newValue
      })
    } else if(symbol === 'C') {
      this.setState({
        inputOne: '',
        inputTwo:'',
        operator: '',
        displayNum: 0
      })
    } else if(symbol === '='){
      this.calculation();
    } else if(isNumber === false && symbol !== '.') {
      this.setState({
        operator: symbol
      })
    } else if(this.state.operator !== ''){
      const newValue = this.state.inputTwo.concat(symbol);
      this.setState({
        inputTwo: newValue,
        displayNum: newValue
      })
    }
  }

  calculation(){
    const num1 = parseFloat(this.state.inputOne);
    const num2 = parseFloat(this.state.inputTwo);
    let result = 0;
    if (this.state.operator === '+'){
      result = num1 + num2;
    } else if (this.state.operator === '-'){
      result = num1 - num2;
    } else if (this.state.operator === 'x'){
      result = num1*num2;
    } else if (this.state.operator === '/'){
      result = num1/num2;
    } else if (this.state.operator === '%') {
      result = num1/100;
    } else if (this.state.operator === '+/-') {
      result = num1%num2;
    }

    this.setState({
        inputOne: result,
        inputTwo:'',
        displayNum: result
    })
  }

  render() {
    return (
      <div className="calculator">
        <Display displayNum={this.state.displayNum}/>
        <NumberPad getInput={this.getInput.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
