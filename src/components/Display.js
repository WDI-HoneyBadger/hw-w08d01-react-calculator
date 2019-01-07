import React from 'react';

const Display = (props) => {
  return (
    <div className="display">
      <h5 className="display_text">
        {/* 3.14 */}
        {props.displayNum}
      </h5>
    </div>
  );
}

export default Display;

