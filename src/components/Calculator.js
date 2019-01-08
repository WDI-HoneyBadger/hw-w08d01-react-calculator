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
    while(number === true || symbol ==='.'){
      const newN = this.state.oneElemnt.concat([symbol])
      this.setState({
        showNumber : newN ,
        oneElemnt : newN
      })
      break;
    }while(symbol==='='){
      this.RenderScore();
  
    }while(symbol === 'C'){
      this.setState({
        showNumber :[],
        process :[],
        oneElemnt :[],
        towElemnt : []
  
      })
      break;
    }while (symbol !== 'C' && number === false && symbol !=='.'){
      this.setState({
        process: symbol
      })
      break;
    }while((number === true || symbol ==='.') && this.state.process !== ''){
      const NewNum = this.state.towElemnt.concat([symbol])
      this.setState({
        showNumber:NewNum,
        towElemnt : NewNum
      })
      break;
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
