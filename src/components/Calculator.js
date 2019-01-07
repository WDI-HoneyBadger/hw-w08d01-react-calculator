
import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import * as Math from 'mathjs'

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor() {
    super();
    this.state = {
      randerNumber: "",
      opreation: [],
    }
  }
  addNumber(symbol, number) {

    if (symbol !== '=' && symbol !== 'C' && symbol !== '+/-'  ) {
      this.setState({
        opreation: this.state.opreation.concat([symbol])
      })
      if (number) {
        this.setState({
          randerNumber: symbol
        })
      }
    } else if (symbol === '=') {
      let result = this.state.opreation.join('')
      console.log(result)
      result = Math.eval(result)
      console.log(result)
      result = Math.format(result, { precision: 14 })
      result = String(result)
      return this.setState({
        randerNumber: [result],
      })
    }else if (symbol === 'C'){
      return this.setState({
        randerNumber: "",
        opreation: [],
      })
    } else if (symbol === '+/-'){
      return this.setState({
        opreation: this.state.opreation.concat("-")
      })
    }
    console.log(this.state.opreation);
  }
  render() {
    return (
      <div className="calculator">
        <Display randerNumber={this.state.randerNumber} />
        <NumberPad addNumber={this.addNumber.bind(this)}
        />
      </div>
    );
  }
}

export default Calculator;
