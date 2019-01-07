import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor() {
    super();
    this.state = {
      numbers: [],
      operation: '',
      num1: [],
      num2: []
    }
  }

  calculate(symbol, isNumber) {
    
    if (symbol === 'C') {
      this.setState({
        numbers: [],
        operation: '',
        num1: [],
        num2: []
      })
    }
    else if ((isNumber || symbol === '.') && this.state.operation === '') {
      const numberReturned = this.state.num1.concat([symbol])
      this.setState({
        numbers: numberReturned,
        num1: numberReturned,
      
      })
    } 
    else if (symbol === '=') {
      this.output();
    } 
    else if (!isNumber && symbol !== '.') {
      this.setState({
        operation: symbol
      })
    } 
    else {
      const numberReturned = this.state.num2.concat([symbol])
      this.setState({
        numbers: numberReturned,
        num2: numberReturned
      })
    }
  }

  output() {
    let num1 = this.state.num1;
    let num2 = this.state.num2;
    let operation = this.state.operation;
    if(operation === 'x')
    operation='*'; 
  
    num1 = (parseFloat((num1.join('')))).toFixed(2);
    num2 = (parseFloat((num2.join('')))).toFixed(2);

    let output = eval(`${num1}  ${operation} ${num2}`);
    this.setState({
      numbers: output,
      operation: '',
      num1: [output],
      num2: []
    })
  }

  render() {
    return (
      <div className="calculator">
        <Display returnedNum={this.state.numbers} />
        <NumberPad calculate={this.calculate.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
