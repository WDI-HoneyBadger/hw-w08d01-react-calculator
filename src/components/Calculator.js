import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
class Calculator extends Component {

  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor(){
    super();


     this.state={ 
    a: 0,
    b: 0,
    result:'',
    operations:[
      'add',
     'subtract',
     'multiply',
     'divide'
    ]
   }
    }


   render(){
     if( operation == 'add'){
      return this.state.a + this.state.b;
     } else  if( operation == 'subtract'){
      return this.state.a - this.state.b;
     }else  if( operation == 'multiply'){
      return this.state.a * this.state.b;
     }else  if( operation == 'divide'){
      return this.state.a / this.state.b;
     }
    this.setState({
  
   
  })
  }


}
export default Calculator;
