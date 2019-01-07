import React from 'react';

const Tile = (props) => {
  const style = {
    width: props.size === 2 ? '200px' : ''
  }

  // console.log(props)
  return (
    <div
      style={style}
      className='tile'
      onClick={(() => props.calculator.fun(props))}
    >
      <h5>
        {props.symbol}
      </h5>
    </div>
  );
}

export default Tile;
