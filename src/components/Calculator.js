import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  constructor(){
    super();
    this.state ={
      displayNumber:[],
      operator: '',
      first:[],
      second:[]
    
    }
  }
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?


  renderCalculator(symbol, number) {
    console.log(this.state)
    if ((number === true || symbol === ',')&& this.state.operator === ''){
      const newNumber = this.state.first.concat([symbol])
      this.setState({
        displayNumber: newNumber, 
        first: newNumber
      })
    } else if (symbol ==='='){
      this.renderEqual();
    }else if (symbol==='C'){
      this.setState({
        displayNumber:[],
        operator:'',
        first: [],
        second:[]
      })
    }else if (symbol!== 'C' && number === false && symbol !== ','){
      this.setState({
        operator: symbol
      })
    } else if ((number === true || symbol === ',')&& this.state.operator !== ''){
      const newNumber = this.state.second.concat([symbol])
      this.setState({
        displayNumber: newNumber, 
        second: newNumber
      })
    }
  };
 
  renderEqual(){
    let first = this.state.first;
    let second = this.state.second;
    let operator = this.state.operator;
    console.log(`first ${first}, operator ${operator}, second ${second}`);

    first = first.join('');
    second = second.join('');


    first = Number(first);
    second = Number(second);


    let result;

    if (operator === '+') result = first + second
    else if (operator ==='-') result = first - second
    else if (operator ==='/') result = first / second
    else if (operator ==='x') result = first * second
    else if (operator ==='%') result = first % second


    this.setState({
      displayNumber: [result], 
      operator:'',
      first: [result],
      second: []

      // console.log(first + operator + second);
      // console.log(result);


    })


  }

  render() {
    return (
      <div className="calculator">
        <Display displayNumber={this.state.displayNumber}/>
        <NumberPad renderCalculator={this.renderCalculator.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
