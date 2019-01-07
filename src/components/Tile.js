import React from 'react';

const Tile = (props) => {
  
  const style = {
    width: props.size === 2 ? '200px' : ''
  }
  return (
    <div
      style={style}
      className='tile'
    >
    
      <h5>
        {props.symbol} 
      </h5>
    </div>
  );
}

export default Tile;
