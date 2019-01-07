import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {

  // think about what you need to keep track of
  // where would you need to pass information to?


  // this component may need to have some state
  constructor() {
    super();
    this.state = {
      displayNumber =[],
      operation = '',
      first =[],
      second =[]
    }
  }




  renderCalc(symbol, number) {
    // console.log(this.state)
    if ((number === true || symbol === ".") && this.state.operation === '') {
      {
        const newNumber = this.state.first.concat.([symbol])
        this.setState({
          displayNumber: newNumber,
          first: newNumber
        })
      } else if (symbol === "=") {
        // render result ha4i function ga3deen nnadeha
        this.renderResult();
      } else if (symbol === "C") {
        this.setState({
          displayNumber =[],
          operation = '',
          first =[],
          second =[]
        })
      } else if (symbol !== 'C' && number === false && symbol !== '.') {
        this.setState({
          operation: symbol
        })

      } else if ((number === true || '.') && this.state.operation !== '') {
        const newNumber = this.state.second.concat([symbol])
        this.setState({
          displayNumber: newNumber,
          second: newNumber
        })
      }
    }
    renderResult(){
      let first = this.state.first;
      let second = this.state.second;
      let operation = this.state.operation;

      first = first.join('');
      second = second.join('');
      //parseFloat can be used instead


      first = Number(first);
      second = Number(second);


      let result;

      if (operatin === '+') result = first + second
      else if (operation === '-') result = first - second
      else if (operation === '+') result = first + second
      else if (operation === '/') result = first / second
      else if (operation === '*') result = first * second


      this.setState({
        displayNumber =[result],
        operation = '',
        first =[result],
        second =[]
      })
      //  console.log(first + opreation + second);
      //  console.log(result);
    }

    render() {
      return (
        <div className="calculator">
          <Display displaySymbol={this.state.displayNumber} />
          <NumberPad renderCalc={this.renderCalc.bind(this)} />
          <Display />
          <NumberPad />

        </div>
      );
    }
  }
}
  

return (
  <div className="calculator">
    <Display />
    <NumberPad />
  </div>
);



export default Calculator;
