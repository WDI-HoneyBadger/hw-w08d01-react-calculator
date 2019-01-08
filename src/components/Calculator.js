import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  // I want to do event lisiner here using state
  constructor(){
    super();
    this.state = {
      currentValue: [],
      operation: '',
      num1:[],
      num2:[]
    }
  }
  // updateNumber(value){
  //   // console.log("button pressed")
  //   this.setState({numbersData: value})
  // }
  
  //the updatenumber function will pass from the parent to the 
  //num1 child NumberPad then Tile , on Tile will be onClick function
  //

renderCalculation(symbol,number){
  if ((number=== true || symbol === '.') && this.state.operation ===''){
    const newNum= this.state.num1.concat([symbol])
    this.setState({
      currentValue: newNum,
      num1: newNum
    })
  } else if (symbol === '=') {
    this.renderResult();
  } else if ( symbol ==='C'){
    this.setState({
      currentValue: [],
      operation:'',
      num1:[],
      num2:[]
    })
  } else if (symbol !== 'C' && number === false && symbol !== '.'){
    this.setState({
      operation:symbol
    })
  }else if ((number === true || symbol === '.') && this.state.operation !== ''){
    const newNum = this.state.num2.concat([symbol])
    this.setState({
      currentValue:newNum,
      num2: newNum
    })
  }

  console.log(this.state)

};

renderResult(){
  let num1 = this.state.num1;
  let num2 = this.state.num2;
  let operation = this.state.operation;
  console.log(`num1 ${num1}, operation${operation}, num2${num2}`);

  num1 = num1.join('');
  num2 = num2.join('');
  num1 = Number(num1);
  num2 = Number(num2);

  let result;
  if (operation === '+') result = num1 + num2
  else if (operation === '-') result = num1 - num2
  else if (operation === '/') result = num1 / num2
  else if (operation === 'x') result = num1 * num2
  else if (operation === '%') result = num1 % num2

  this.setState({
    currentValue: [result],
    operation:'',
    num1:[result],
    num2:[]
})
  console.log(num1 + operation + num2);
  console.log(result);
}


render() {
  return (
    <div className="calculator">
        <Display displayCurretValue={this.state.currentValue}/>
        <NumberPad updateNumber={this.renderCalculation.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
