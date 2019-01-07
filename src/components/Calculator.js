import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor(){
    super();
    this.state= {
      currentValue: 0,
      total:0,
      recentOp:'',


    }
  }

 displayNumbers(event){
   const newValue = event.target.value;
   this.setState=({currentValue:newValue})
 }
updatePad(){

}


  render() {
    return (
      <div className="calculator">
        <Display currValue ={this.state.currentValue.toString()}  />
        <NumberPad  />
      </div>
    );
  }
}

export default Calculator;
