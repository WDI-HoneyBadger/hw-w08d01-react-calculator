import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?

  constructor(){
    super()
    this.state = {
      displayNum: 0,
      inpNumOne : '',
      inpNumTwo: '',
      operator: ''
    }
  }
  renderInps(symbol, num){
    if((num === true || symbol === '.') && this.state.operator ===''){
      const newNum = this.state.inpNumOne.concat(symbol);
      this.setState({
        displayNum: newNum,
        inpNumOne: newNum
      })
    } else if (symbol === 'C'){
      this.setState({
        displayNum: 0,
        inpNumOne : '',
        inpNumTwo: '',
        operator: ''
      })
    } else if (symbol === '='){
      this.claculateInps();
    } else if (num === false && symbol !== '.'){
      this.setState({
        operator: symbol
      })
    } else if (this.state.operator !== ''){
      const newNum = this.state.inpNumTwo.concat(symbol);
      this.setState({
        displayNum: newNum,
        inpNumTwo: newNum
      })
    }
  }

  claculateInps(){
    const inpNumOne = this.state.inpNumOne;
    const inpNumTwo = this.state.inpNumTwo;
    const operator = this.state.operator;

    
    let result = 0;

    if (operator === '+'){
      result = inpNumOne + inpNumTwo
    } else if (operator === '-'){
      result = inpNumOne - inpNumTwo
    } else if (operator === '/') {
      result = inpNumOne / inpNumTwo
    } else if (operator === 'x'){
      result = inpNumOne * inpNumTwo
    } else if (operator === '%'){
      result = inpNumOne % inpNumTwo
    }

    this.setState({
      displayNum: result,
      inpNumOne: result,
      inpNumTwo: '',
      operator: ''
    })


  }

  render() {
    return (
      <div className="calculator">
        <Display displayNum={this.state.displayNum} />
        <NumberPad  renderInps={this.renderInps.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
