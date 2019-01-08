import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayNumber: [],
      opreation: '',
      numberOne: [],
      numberTwo: []
    }
  }
  renderCalculator(symbol, number) {
    console.log(this.state)
    if ((number === true || symbol === '.') && this.state.opreation === '') {
      const newNumber = this.state.numberOne.concat([symbol])
      this.setState({
        displayNumber: newNumber,
        numberOne: newNumber
      })
    } else if (symbol === '=') {
      this.renderResult();
    } else if (symbol === 'C') {
      this.setState({
        displayNumber: [],
        opreation: '',
        numberOne: [],
        numberTwo: []
      })
    } else if (symbol !== 'C' && number === false && symbol !== '.') {
      this.setState({
        opreation: symbol
      })
    } else if ((number === true || symbol === '.') && this.state.opreation !== '') {
      const newNumber = this.state.numberTwo.concat([symbol])
      this.setState({
        displayNumber: newNumber,
        numberTwo: newNumber
      })
    }
  };

  sum(x, y){
    return x+y;
  }
  minus(x, y){
    return x-y;
  }
  divid(x,y){
    return x/y;
  }
  multiply(x,y){
    return x*y;
  }
  mod(x,y){
    return x%y;
  }
  renderResult() {
    let numberOne = this.state.numberOne;
    let numberTwo = this.state.numberTwo;
    let opreation = this.state.opreation;
    numberOne = numberOne.join('');
    numberTwo = numberTwo.join('');
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    
    let result;
    if (opreation === '+') result = this.sum(numberOne, numberTwo)
    else if (opreation === '-') result = this.minus(numberOne, numberTwo) 
    else if (opreation === '/') result =this.divid(numberOne,numberTwo) 
    else if (opreation === 'x') result =this.multiply(numberOne,numberTwo) 
    else if (opreation === '%') result =this.mod(numberOne,numberTwo) 

    this.setState({
      displayNumber: [result],
      opreation: '',
      numberOne: [result],
      numberTwo: []
    })
  }

  render() {
    return (
      <div className="calculator">
        <Display displaySymbol={this.state.displayNumber} />
        <NumberPad renderCalculator={this.renderCalculator.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
