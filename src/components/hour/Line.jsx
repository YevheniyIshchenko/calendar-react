import React, { useEffect, useState } from "react";

const Line = ({ marginTop }) => {
  const lineStyle = {
    marginTop: marginTop,
  };

  return (
    <div style={lineStyle} className='line'>
      <span className='red-line'></span>
    </div>
  );
};

export default Line;
