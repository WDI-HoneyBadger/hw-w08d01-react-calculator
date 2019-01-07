import React from 'react';

const Display = (props) => {
  return (
    <div className="display">
      <h5 className="display_text">
     {/* to see the number  */}
      {props.displaySymbol}
        {/* 3.14  << we wont need this */}
      </h5>
    </div>
  );
}

export default Display;

