import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayNumber: [],
      opreation: '',
      firstNum: [],
      secondNum: []
    }}
    renderCal(symbol , number){
      if ((number === true || symbol === '.') && this.state.opreation === ''){
        const numberNsymbol = this.state.firstNum.concat([symbol])
        this.setState({
          displayNumber: numberNsymbol,
          firstNum: numberNsymbol
        })
       }else if(symbol === '='){
         this.reset();
        }else if (symbol !== 'C' && number === false && symbol !== '.'){
          this.setState({
            opreation: symbol
          })
        }else if ((number === true || symbol === '.')){
          const numberNsymbol = this.state.firstNum.concat([symbol]);
          this.setState({
            displayNumber: numberNsymbol,
            secondNum: numberNsymbol
          })
        }
        console.log(this.state);

      }
    
      reset(){
        this.setState({
          displayNumber: [],
          opreation: '',
          firstNum: [],
          secondNum: []
        })
      }
      renderResult(){
        let result='';
        let firstNum = this.state.firstNum;
        let secondNum = this.state.secondNum;
        let opreation = this.state.opreation;
        console.log(`first ${firstNum},  opreation ${opreation},  second ${secondNum}`);

        firstNum = firstNum.join('');
        secondNum = secondNum.join('');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        if(opreation === '+'){
          result = firstNum + secondNum;
          return result;
        }else if (opreation === '-'){
          result = firstNum + secondNum;
        }else if (opreation === '/'){
          result = firstNum / secondNum;
        }else if (opreation === '*'){
          result = firstNum * secondNum;
        }else if (opreation === "%"){
          result = firstNum % secondNum;
        }
        this.setState({
          displayNumber: result,
          opreation: '',
          firstNum: [result],
          secondNum: []
        })

      }
    render() {
    return (
      <div className="calculator">
        <Display />
        <NumberPad />
        <Display displaySymbol={this.state.displayNumber} />
        <NumberPad renderCal={this.renderCal.bind(this)} />
      </div>
    ); 
  } 
  }
  export default Calculator;