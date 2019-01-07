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
      first: [],
      second: []
    }
  }
  
  
  renderCalculator(symbol, number) {
    console.log(this.state)
    if ((number === true || symbol === '.') && this.state.opreation === '') {
      const newNumber = this.state.first.concat([symbol])
      this.setState({
        displayNumber: newNumber,
        first: newNumber
      })
    } else if (symbol === '=') {
      this.renderResult();
    } else if (symbol === 'C') {
      this.setState({
        displayNumber: [],
        opreation: '',
        first: [],
        second: []
      })
    } else if (symbol !== 'C'  && number === false && symbol !== '.' /* && symbol !== '+/-' */) {
      this.setState({
        opreation: symbol
      })
    } else if ((number === true || symbol === '.') && this.state.opreation !== '') {
      const newNumber = this.state.second.concat([symbol])
      this.setState({
        displayNumber: newNumber,
        second: newNumber
      })
    }
    console.log(this.state)
  };
  

  renderResult() {
    let first = this.state.first;
    let second = this.state.second;
    let opreation = this.state.opreation;
    console.log(`first ${first},  opreation ${opreation},  second ${second}`);

    first = first.join('');
    second = second.join('');
    
    first = Number(first);
    second = Number(second);
    

    //const result1 = eval(`${first+opreation+second}`);
    
    let result;

    if (opreation === '+') result = first + second
    else if (opreation === '-') result = first - second
    else if (opreation === '/') result = first / second
    else if (opreation === 'x') result = first * second
    else if (opreation === '%') result = first % second

    this.setState({
      displayNumber: [result],
      opreation: '',
      first: [result],
      second: []
    })

    console.log(first + opreation + second);
    console.log(result);
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