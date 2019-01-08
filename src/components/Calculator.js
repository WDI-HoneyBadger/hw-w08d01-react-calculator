import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      res: 0,
      firstNum: '',
      secondNum: '',
      opration: ''
    }
  }
  renderCalculator(symbol, num) {
    if((num === true || symbol === '.') && this.state.opration === ''){
      const newNum = this.state.firstNum(symbol);
      this.setState({
        res: newNum,
        firstNum: newNum
      })
    } else if (symbol === 'C'){
      this.setState({
          res: 0,
          firstNum: '',
          secondNum: '',
          opration: ''
      })
    } else if (symbol === '='){
      this.handleClaculate();
    } else if (num === false && symbol !== '.'){
      this.setState({
        opration: symbol
      })
  } else if (this.state.opration !== ''){
    const newNum = this.state.secondNum.concat(symbol);
    this.setState({
      res: newNum,
      secondNum: newNum
    })
  }
  handleClaculate() {
    const firstNum = this.state.firstNum;
    const secondNum = this.state.secondNum;
    const opration = this.state.opration;
    let res = 0;

    if (opration === '+'){
      res = firstNum + secondNum
    } else if (opration === '-'){
      res = firstNum - secondNum
    } else if (opration === '/') {
      res = firstNum / secondNum
    } else if (opration === 'x'){
      res = firstNum * secondNum
    } else if (opration === '%'){
      res = firstNum % secondNum
    }

    this.setState({
      res: res,
      firstNum: res,
      opration: ''
    })
  }


  render() {

    return (
      <div className="calculator">
        <Display res={this.state.res}/>
        <NumberPad handleClaculate={this.handleClaculate.bind(this)}/>
      </div>
    );
  
}

export default Calculator;
