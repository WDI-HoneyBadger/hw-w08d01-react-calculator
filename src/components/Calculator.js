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
      displayNumber: [],
      opreation: '',
      firstNum: [],
      secondNum: []
    }
  }


  renderCalculator(symbol, number) {
    console.log(this.state)
    if ((number === true || symbol === '.') && this.state.opreation === '') {
      this.fristInput(symbol);
    } else if (symbol === '=') {
      this.renderResult();
    } else if (symbol === 'C') {
      this.setState({
        displayNumber: [],
        opreation: '',
        firstNum: [],
        secondNum: []
      })
    } else if (symbol !== 'C' && number === false && symbol !== '.') {
      this.setState({
        opreation: symbol
      })
    } else if ((number === true || symbol === '.') && this.state.opreation !== '') {
      const newNumber = this.state.secondNum.concat([symbol])
      this.setState({
        displayNumber: newNumber,
        secondNum: newNumber
      })
    }
    console.log(this.state)
  };

  fristInput(symbol) {
    const newNumber = this.state.firstNum.concat([symbol])
    this.setState({
      displayNumber: newNumber,
      firstNum: newNumber
    })
  }


  add(numOne, numTwo) {
    return numOne + numTwo
  }

  minus(numOne, numTwo) {
    return numOne + numTwo
  }

  divide(numOne, numTwo) {
    return numOne + numTwo
  }

  multipl(numOne, numTwo) {
    return numOne + numTwo
  }

  modulo(numOne, numTwo) {
    return numOne + numTwo
  }



  renderResult() {
    let firstNum = this.state.firstNum;
    let secondNum = this.state.secondNum;
    let opreation = this.state.opreation;
    console.log(`firstNum ${firstNum},  opreation ${opreation},  secondNum ${secondNum}`);

    firstNum = firstNum.join('');
    secondNum = secondNum.join('');

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    //const result = first+opreation+second;
    let result;


    if (opreation === '+') result = this.add(firstNum, secondNum)
    else if (opreation === '-') result = this.minus(firstNum, secondNum)
    else if (opreation === '/') result = this.divide(firstNum, secondNum)
    else if (opreation === 'x') result = this.multipl(firstNum, secondNum)
    else if (opreation === '%') result = this.modulo(firstNum, secondNum)

    this.setState({
      displayNumber: result,
      opreation: '',
      firstNum: [result],
      secondNum: []
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