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
      firstNum: '',
      secondNum: '',
      operator: ''
    }
  }

  reset() {
    this.setState({
      firstNum: '',
      secondNum: '',
      operator: ''
    })
  }

  calculator(obj) {
    let newDis;
    
    if (obj.number === true) {
      newDis = this.state.firstNum.concat(obj.symbol);
      this.setState({ firstNum: newDis })

    } else if (obj.symbol === '.') {
      newDis = this.state.firstNum.concat(obj.symbol);
      this.setState({ firstNum: newDis })

    } else if (obj.symbol === "C") {
      this.reset()

    } else if (obj.number === false && obj.symbol !== '%' && obj.symbol !== '+/-' && obj.symbol !== '=') {
      const sNum = this.state.firstNum;
      console.log(sNum);
      this.setState({
        firstNum: '',
        secondNum: sNum,
        operator: obj.symbol
      })
    } else if(obj.symbol === '='){
      this.totalcalc();
    }
  }

  totalcalc() {
    const firstNumber = this.state.secondNum;
    const secondNumber = this.state.firstNum;
    const operator = this.state.operator;
    console.log(firstNumber, " ", operator, " ", secondNumber);
    let total;
    switch (operator) {
      case '+':
        total = parseFloat(firstNumber) + parseFloat(secondNumber)
        break;
      case '-':
        total = parseFloat(firstNumber) - parseFloat(secondNumber)
        break;
      case 'x':
        total = parseFloat(firstNumber) * parseFloat(secondNumber)
        break;
      case '/':
        total = parseFloat(firstNumber) / parseFloat(secondNumber)
        break;
      default:
        break;
    }
    this.setState({ firstNum: `${total}` });
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.firstNum} />
        <NumberPad fun={this.calculator.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
