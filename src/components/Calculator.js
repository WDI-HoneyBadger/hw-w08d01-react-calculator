import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
// import Tile from './Tile';

class Calculator extends Component {
  // this component may need to have some state
  constructor(){
    super()
    this.state = {

      deleteBtn : false,
      nums: [],
      total:null
    }


  }
  // think about what you need to keep track of
  renderClickedNums(symbol){
    console.log(symbol);
    if(symbol === 'C'){
      this.setState({total : null})
      this.setState({nums : []})
    } else {
      const symbolToDisplay = this.state.nums.concat([symbol]);
      this.setState({nums: symbolToDisplay})
    }
    if(symbol === '=' && this.state.nums.length > 0){
      this.calculate(this.state.nums);
    }
    
   

  }

  calculate(arr){
      let newTotal = 0;
      let left =[];
      let right = [];
       
      if(arr.indexOf('+') > -1){
        arr = arr.join('');
        let arr2 = arr.split('+');
        console.log(arr2)
        left = arr2[0];
        right = arr2[1];
        console.log(right , left)
        newTotal =  Number(right) +   Number(left)  ;
        console.log("newTotal" , newTotal)

        this.setState({total : newTotal})

      }

      else if(arr.indexOf('-') > -1){
        arr = arr.join('');
        let arr2 = arr.split('-');
        console.log(arr2)
        left = arr2[0];
        right = arr2[1];
        console.log(right , left)
        
          newTotal =  Number(left) - Number(right) 
        
          // newTotal =  '-' + Number(right) - Number(left);

          console.log("newTotal" , newTotal)
          this.setState({total : newTotal})
        
      }
      else if(arr.indexOf('x') > -1 ){
        arr = arr.join('');
        let arr2 = arr.split('x');
        console.log(arr2)
        left = arr2[0];
        right = arr2[1];
        console.log(right , left);

          newTotal =  Number(right) * Number(left)  ;
          console.log("newTotal" , newTotal)
      
        this.setState({total : newTotal})
      }
      else if(arr.indexOf('/') > -1){
        arr = arr.join('');
        let arr2 = arr.split('/');
        console.log(arr2)
        left = arr2[0];
        right = arr2[1];
        console.log(right , left);

          newTotal =  Number(left) / Number(right)  ;
         console.log("newTotal" , newTotal)
        this.setState({total : newTotal})
      }
      else if(arr.indexOf('%') > -1){
        arr = arr.join('');
        let arr2 = arr.split('%');
        console.log(arr2)
        left = arr2[0];
        right = arr2[1];
        console.log(right , left);

          newTotal =  Number(left) % Number(right)  ;
          console.log("newTotal" , newTotal)
      
        this.setState({total : newTotal})

      }
  }


  
  // where would you need to pass information to?

  render() {
    return (
      <div className="calculator">
        
        <Display  symbol={this.state.nums}
        total={this.state.total}
        />
        <NumberPad renderClickedNums = {this.renderClickedNums.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
