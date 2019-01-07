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
      displayedNumber: "0",
      firstOperand: "",
      secondOperand: "",
      operator: "",
      operatorPressed: false,
      history: []
    }
  }

  updateDisplayedNumber() {
    if (!this.state.operatorPressed) {
      this.setState({ displayedNumber: this.state.firstOperand})
      // console.log("DISPLAYING FIRST OPERAND", this.state.firstOperand)
    }
    else {
      this.setState({ displayedNumber: this.state.secondOperand })
      // console.log("DISPLAYING SECOND OPERAND", this.state.secondOperand)
    }
  }

  updateOperand(operand) {
    if (!this.state.operatorPressed) {
      const constructedNumber = "" + this.state.firstOperand + operand;
      this.setState({
        firstOperand: constructedNumber
      }, this.updateDisplayedNumber)
      // console.log("IN IF, OPERATOR PRESSED? ", this.state.operatorPressed)
    }
    else {
      // console.log("IN ELSE, OPERATOR PRESSED? ", this.state.operatorPressed)
      const constructedNumber = "" + this.state.secondOperand + operand;
      this.setState({
        secondOperand: constructedNumber
      }, this.updateDisplayedNumber)
    }
  }

  updateOperator(operator) {
    // console.log("SETTING OPERATOR ", operator)
    this.setState({
      operator: operator,
      operatorPressed: true
    });
  }

  // resetOperatorPressed(){
  //   this.setState({operatorPressed: false})
  // }

  clear(){
    this.setState({
      displayedNumber: 0,
      firstOperand: "",
      secondOperand: "",
      operator: "",
      operatorPressed: false
    })
  }

  resetOperatorAndSecond(){
    // this.updateDisplayedNumber()
    // console.log("IN TEST, SETTING OPERATOR PRESSED FALSE")
    this.setState({operatorPressed: false, secondOperand: ""}, this.updateDisplayedNumber)
    console.log(this.state.history)
    
    // console.log(this.state.firstOperand)
  }

  displayHistory(){
    // console.log("in display history")
    return{
      color: 'white'
      // display: 'block'
    }
  }

  negate() {
    if (!this.state.operatorPressed) {
      if (this.state.firstOperand[0] === "-"){
        this.setState({ firstOperand: (parseFloat(this.state.firstOperand) * -1)}, this.updateDisplayedNumber)
      }
      else this.setState({ firstOperand: ("-" + this.state.firstOperand)}, this.updateDisplayedNumber)
      // console.log("DISPLAYING FIRST OPERAND", this.state.firstOperand)
    }
    else {
      if (this.state.secondOperand[0] === "-"){
        this.setState({ secondOperand: (parseFloat(this.state.secondOperand) * -1)}, this.updateDisplayedNumber)
      }
      else this.setState({ secondOperand: ("-" + this.state.secondOperand)}, this.updateDisplayedNumber)
      // console.log("DISPLAYING SECOND OPERAND", this.state.secondOperand)
    }
  }

  calculate(){
    if(this.state.operator === "+"){
      const theTotal = (parseFloat(this.state.firstOperand) + parseFloat(this.state.secondOperand));
      this.setState({firstOperand: theTotal, history: this.state.history.concat(`'${this.state.firstOperand} + ${this.state.secondOperand} = ${theTotal}'`)}, this.resetOperatorAndSecond);
    }
    else if(this.state.operator === "-"){
      const theTotal = (parseFloat(this.state.firstOperand) - parseFloat(this.state.secondOperand));
      this.setState({firstOperand: theTotal, history: this.state.history.concat(`'${this.state.firstOperand} - ${this.state.secondOperand} = ${theTotal}'`)}, this.resetOperatorAndSecond)
    }
    else if(this.state.operator === "x"){
      const theTotal = (parseFloat(this.state.firstOperand) * parseFloat(this.state.secondOperand));
      this.setState({firstOperand: theTotal, history: this.state.history.concat(`'${this.state.firstOperand} x ${this.state.secondOperand} = ${theTotal}'`)}, this.resetOperatorAndSecond)
    }
    else if(this.state.operator === "/"){
      const theTotal = (parseFloat(this.state.firstOperand) / parseFloat(this.state.secondOperand));
      this.setState({firstOperand: theTotal, history: this.state.history.concat(`'${this.state.firstOperand} / ${this.state.secondOperand} = ${theTotal}'`)}, this.resetOperatorAndSecond)
    }
    else if(this.state.operator === "%"){
      const theTotal = (parseFloat(this.state.firstOperand) % parseFloat(this.state.secondOperand));
      this.setState({firstOperand: theTotal, history: this.state.history.concat(`'${this.state.firstOperand} % ${this.state.secondOperand} = ${theTotal}'`)}, this.resetOperatorAndSecond)
    }
    console.log(this.state.history)
    // console.log(this.state.firstOperand)
    // this.setState({operatorPressed: false})
    // this.updateDisplayedNumber();
  }

  render() {
    return (
      <div className="calculator">
        <Display displayedNumber={this.state.displayedNumber} 
                //  displayHistory={this.displayHistory}
                />
        <NumberPad
          updateOperand={this.updateOperand.bind(this)}
          updateOperator={this.updateOperator.bind(this)}
          updateDisplayedNumber={this.updateDisplayedNumber.bind(this)}
          calculate={this.calculate.bind(this)}
          operatorPressed={this.state.operatorPressed}
          clear={this.clear.bind(this)}
          negate={this.negate.bind(this)}
        />
        <div 
        style={{color: 'white'}} 
        >{this.state.history.join(", ")}</div>
      </div>
    );
  }
}

export default Calculator;
