import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import TileData from '../data/tileData'
class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor(){
    super();
    this.state = {
      number:TileData,
      displayNumber : TileData[2].symbol,
      numbers :[]
    }
  }
  
      
  
  updateNumber(num){
    console.log(num);
    console.log("num clicked")
    this.setState({
      displayNumber:TileData[num].symbol
    })
  }
  
  addNumbers(num){
    console.log(num);
    const newNum = this.state.numbers.concat([num]);
    this.setState({
      numbers : newNum
    })
  }


  render() {
    return (
      <div className="calculator">
        <Display number = {this.state.displayNumber}/>
        <NumberPad numbers={this.state.numbers}
          updateNumber = {this.updateNumber.bind(this)}
          addNumbers = {this.addNumbers.bind(this)}/>
      </div>
    );
  }

}

export default Calculator;
