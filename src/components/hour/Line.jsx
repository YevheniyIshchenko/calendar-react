import React from "react";

const Line = ({ marginTop }) => {
  const lineStyle = {
    marginTop: marginTop,
  };

  return (
    <div style={lineStyle} className='line'>
      <div className='red-line'></div>
      <div className='circle'></div>
    </div>
  );
};

export default Line;
