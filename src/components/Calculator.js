import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
 
  constructor (){
    super();
    this.state={
      showNumber : [],
      process : '',
      oneElemnt : [],
      towElemnt : []
    }
  }
  renderProcsess(symbol,number){
    if(number === true || symbol ==='.'){
      const newN = this.state.oneElemnt.concat([symbol])
      this.setState({
        showNumber : newN ,
        oneElemnt : newN
      })
    }else if(symbol==='='){
      this.RenderScore();
  
    }else if(symbol === 'C'){
      this.setState({
        showNumber :[],
        process :[],
        oneElemnt :[],
        towElemnt : []
  
      })
    }else if (symbol !== 'C' && number === false && symbol !=='.'){
      this.setState({
        process: symbol
      })
    }else if((number === true || symbol ==='.') && this.state.process !== ''){
      const NewNum = this.state.towElemnt.concat([symbol])
      this.setState({
        showNumber:NewNum,
        towElemnt : NewNum
      })
    }
  }
  

    
  
  RenderScore(){
    let oneElemnt = this.state.oneElemnt;
    let towElemnt = this.state.towElemnt;
    let process = this.state.process;
  
    oneElemnt = oneElemnt.join('');
    towElemnt = towElemnt.join('');
    oneElemnt= Number(oneElemnt);
    towElemnt= Number(towElemnt);

  

  let result;

  switch(process){
    case '+': result = oneElemnt + towElemnt;
    break;
    case '-': result = oneElemnt - towElemnt;
    break;
    case '/': result= oneElemnt - towElemnt;
    break;
    case "x": result= oneElemnt * towElemnt;
    break;
    case "%": result = oneElemnt % towElemnt;
    break; 
    default : console.log('not found')
  }
  this.setState({
    showNumber:[result],
    process :"",
    oneElemnt:[result],
    towElemnt:[] 
  })
  }



  render() {
    return (
      <div className="calculator">
        <Display theShow={this.state.showNumber}/>
        <NumberPad TheRenderProcsess={this.renderProcsess.bind(this)} />
        
      </div>
    );
  }
}


export default Calculator;
