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
      displayInput: [],
      opreation: '',
      firstNumber: [],
      secondNumber: []
    }
  }


  renderCalculator(symbol, number) {
    console.log(this.state)
    
    if ((number === true || symbol === '.') && this.state.opreation === '') {
      const newNumber = this.state.firstNumber.concat([symbol])
      this.setState({
        displayInput: newNumber,
        firstNumber: newNumber
      })
    } else if (symbol === '=') {
      this.renderResult();
    } else if (symbol === 'C') {
      this.setState({
        displayInput: [],
        opreation: '',
        firstNumber: [],
        secondNumber: []
      })
    } else if (symbol !== 'C' && number === false && symbol !== '.') {
      this.setState({
        opreation: symbol
      })
    } else if ((number === true || symbol === '.') && this.state.opreation !== '') {
      const newNumber = this.state.secondNumber.concat([symbol])


      this.setState({
        displayInput: newNumber,
        secondNumber: newNumber
      })
    }
    console.log(this.state)
  };


  rendleAdd(x, y){

    return x+y
  }

  rendleSubtraction(x, y){

    return x-y
  }

  rendleDivision(x, y){
    return x/y
  }

  rendleMultiplication(x, y){
    return x*y
  }

  rendleModulus(x, y){
    return x%y
  }
  

  renderResult() {
    let firstNumber = this.state.firstNumber;
    let secondNumber = this.state.secondNumber;
    let opreation = this.state.opreation;

    firstNumber = firstNumber.join('');
    secondNumber = secondNumber.join('');

    
    firstNumber= parseFloat(firstNumber);
    secondNumber= parseFloat(secondNumber);
    
    let value;

     if (opreation === 'x') value = this.rendleMultiplication(firstNumber, secondNumber)
    else if (opreation === '%') value = this.rendleModulus(firstNumber, secondNumber)
    else if (opreation === '+') value = this.rendleAdd(firstNumber, secondNumber)
    else if (opreation === '-') value = this.rendleDivision(firstNumber ,secondNumber)
    else if (opreation === '/') value = this.rendleSubtraction(firstNumber, secondNumber)

    this.setState({
      displayInput: value,
      opreation: '',
      firstNum: [value],
      secondNum: []
    })

    
   
  }

  render() {
    return (
      <div className="calculator">
        
        <Display displaySymbol={this.state.displayInput} />
        <NumberPad renderCalculator={this.renderCalculator.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
