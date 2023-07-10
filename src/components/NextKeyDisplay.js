import React from 'react';

const NextKeyDisplay = ({ nextKey }) => {
  return <div style={{color:'#5e5e5e',fontFamily:'monospace',padding:'10px  ',marginTop:'15px'}}>Next Key:<span
  style={{color:'orange',fontSize:'14px'}}
  > {nextKey}</span></div>;
};

export default NextKeyDisplay;
