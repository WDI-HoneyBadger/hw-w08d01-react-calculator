import React, { Component } from 'react';
import Display from './Display';
import numberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
constructor(){
  super()
  this.state={
    showen:[],
    mathOper:'',
    num1:[],
    num2:[]
  }
}

renderCalc(symbole,number){
  if((number === true || symbole === ',')&& this.state.mathOper ===''){
    const newN = this.state.num1.concat([symbole])
    this.setState({
      showen: newN,
      num1: newN
    })
  }else if(symbole==='='){
    this.renderResult();
  }else if(symbole ==='C'){
    this.setState({
      showen:[],
      mathOper:'',
      num1:[],
      num2:[]
    })
  }else if (symbole !=='C' && number===false && symbole !=='.'){
    this.setState({
      mathOper: symbole
    })
  }else if ((number === true || symbole ==='.')&& this.state.mathOper!==''){
    const NewNumm= this.state.num2.concat([symbole])
    this.setState({
      showen:NewNumm,
      num2:NewNumm

    })

  }
  }

RenderScore(){
  let num1= this.state.oneElemnt;
  let num2 = this.state.num2;
  let mathOper= this.state.process;

  num1= oneElemnt.join('');
  num2 = num2.join('');
  oneElemnt= Number(oneElemnt);
  num2= Number(num2);



let result;

switch(process){
  case '+': result = num1+ num2;
  break;
  case '-': result = num1- num2;
  break;
  case '/': result= num1- num2;
  break;
  case "x": result= num1* num2;
  break;
  case "%": result = num1% num2;
  break; 
  default : console.log('not found')
}
this.setState({
  showNumber:[result],
  mathOper:"",
  num1:[result],
  num2:[] 
})
}


  render() {
    return (
      <div className="calculator">
        <Display showResult={this.state.showen} />
        <numberberPad TheResult={this.renderCalc.bind(this)} />
      </div>
    );
  }
}


export default Calculator;
