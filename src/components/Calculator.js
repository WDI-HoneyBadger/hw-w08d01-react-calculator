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
      numbersDisplay: 0,
      opreation: '',
      num1: '',
      num2: ''
    }
  }


  renderCalculator(symbol, num) {

    console.log(this.state)
    if ((num === true || symbol === '.') && this.state.opreation === '') {
      const newNumber = this.state.num1.concat([symbol])
      this.setState({
        numbersDisplay: newNumber,
        num1: newNumber

      })

    } else if (symbol === '=') {
      this.renderResult();

    } else if (symbol === 'C') {
      this.setState({

        numbersDisplay: 0,
        opreation: '',
        num1: '',
        num2: ''
      })

    } else if (symbol !== 'C' && num === false && symbol !== '.') {
      this.setState({
        opreation: symbol
      })

    } else if ((num === true || symbol === '.') && this.state.opreation !== '') {
      const newNumber = this.state.num2.concat([symbol])
      this.setState({
        numbersDisplay: newNumber,
        num2: newNumber


      })
    }
    console.log(this.state)
  };

//==== render

  renderResult() {
    let first = this.state.num1;
    let second = this.state.num2;
    let opreation = this.state.opreation;


    first = Number(first);
    second = Number(second);

    let result;
    if (opreation === '+') result = first + second

    else if (opreation === '-') result = first - second

    else if (opreation === '/') result = first / second

    else if (opreation === 'x') result = first * second

    else if (opreation === '%') result = first % second

    this.setState({

      numbersDisplay: result,
      opreation: '',
      num1: result,
      num2: ''

    })


    console.log(first + opreation + second);

    console.log(result);

  }

  render() {
    return (
      <div className="calculator">
        <Display displaySymbol={this.state.numbersDisplay} />
        <NumberPad renderCalculator={this.renderCalculator.bind(this)} />
      </div>
    );
  }
}

export default Calculator;