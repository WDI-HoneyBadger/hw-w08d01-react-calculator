import React from 'react';

const Display = (props) => {
  return (
    <div className="display">
      <h5 className="display_text">
      {props.theShow}
      </h5>
    </div>
  );
}

export default Display;

