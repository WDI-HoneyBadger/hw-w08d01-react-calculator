import React from 'react';

const Display = (props) => {
  return (
    <div className="display"
    value={props.displayNumbers()}
    onChange={props.currentValue} 
    > 
      <h5 className="display_text">
      
        {props.currentValue}
      </h5>
    </div>
  );
}

export default Display;

