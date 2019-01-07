import React from 'react';

const Tile = (props) => {
  const style = {
    width: props.size === 2 ? '200px' : ''
  }

  return (
    <div
      onClick={() => {
        if(props.number || props.symbol === "."){
          props.updateOperand(props.symbol);
          props.updateDisplayedNumber();
        }
        // else if((props.symbol === "+" || props.symbol === "-" || props.symbol === "x" || props.symbol === "/" || props.symbol === "%") && !props.operatorPressed){
        //   props.updateOperator(props.symbol);
        // }
        else if(props.symbol === "+" || props.symbol === "-" || props.symbol === "x" || props.symbol === "/" || props.symbol === "%"){
          // props.calculate();
          props.updateOperator(props.symbol);
        }
        else if(props.symbol === "+/-"){
          props.negate();
        }
        else if(props.symbol === "C"){
          props.clear();
        }
        else if(props.symbol === "="){
          props.calculate();
        }
      }}
      style={style}
      className='tile'
    >
      <h5 value={props.symbol}  >
        {props.symbol}
      </h5>
    </div>
  );
}

export default Tile;
