import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  constructor(){
    super()
    this.state = {
      res: 0,
      num1 : '',
      num2: '',
      opr: ''
    }
  }
  renderCalculate(symbol, num){
    if((num === true || symbol === '.') && this.state.opr ===''){
      const newNum = this.state.num1.concat(symbol);
      this.setState({
        res: newNum,
        num1: newNum
      })
    } else if (symbol === 'C'){
      this.setState({
        res: 0,
        num1 : '',
        num2: '',
        opr: ''
      })
    } else if (symbol === '='){
      this.claculate();
    } else if (num === false && symbol !== '.'){
      this.setState({
        opr: symbol
      })
    } else if (this.state.opr !== ''){
      const newNum = this.state.num2.concat(symbol);
      this.setState({
        res: newNum,
        num2: newNum
      })
    }
  }

  claculate(){
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    const opr = this.state.opr;


    let res = 0;

    if (opr === '+'){
      res = num1 + num2
    } else if (opr === '-'){
      res = num1 - num2
    } else if (opr === '/') {
      res = num1 / num2
    } else if (opr === 'x'){
      res = num1 * num2
    } else if (opr === '%'){
      res = num1 % num2
    }

    this.setState({
      res: res,
      num1: res,
      inum2npNumTwo: '',
      opr: ''
    })
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <NumberPad />
        <Display res={this.state.res} />
        <NumberPad  claculate={this.claculate.bind(this)}/>
      </div>
    );
  }
}
  export default Calculator;
