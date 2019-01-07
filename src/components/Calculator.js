import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?

  constructor(){
    super();
    this.state = {
      displayInput: '',
      input1: '',
      input2: '',
      operator: ''
    }
  }

  getInput(val){
    if (val !== 'C'){
      if (this.state.operator !== ''){
        if ((val !== '+' && val !== '-' && val !== 'x' && val !== '/' && val !== '%' && val !== '=' )){
          const newInput = this.state.input2;
          console.log(val);
          const newVal = newInput.concat(val);
          this.setState({displayInput: newVal, input2: newVal})
        } else if (val === '=') {
            this.calculate();
        }
      }
       else { 
         if ((val !== '+' && val !== '-' && val !== 'x' && val !== '/' && val !== '%' && val !== '=' )){
            const newInput = this.state.input1;
            console.log(val);
            const newVal = newInput.concat(val);
            this.setState({displayInput: newVal, input1: newVal})
         } else if (val === '='){
            this.calculate();
         } else {
           this.setState({operator: val});
         }
      }
    } else {
      this.setState({
        displayInput: '',
        input1: '',
        input2: '',
        operator: ''})
    }
  }

  calculate(){
    const firstInput = parseInt(this.state.input1);
    let operator = this.state.operator;
    let secInput;
    let result;
    if (this.state.input2 === ''){
      secInput =0;
      result = firstInput;
    } else {
      secInput = parseInt(this.state.input2)
      if (operator === '+') {
         result = firstInput + secInput;
      } else if (operator === '-') {
        result = firstInput - secInput;
      } else if (operator === 'x') {
        result = firstInput * secInput;
      } else if (operator === '/') {
        result = firstInput / secInput;
      }
    }
    this.setState({displayInput:parseInt(result)})
  }

  render() {
    return (
      <div className="calculator">
        <Display input={this.state.displayInput}/>
        <NumberPad getInput={this.getInput.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
