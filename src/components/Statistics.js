import React from 'react';
import { useSelector } from 'react-redux';

const Statistics = () => {
  
const keyPressCount = useSelector((state) => state.counter.value);
 

  return (
    <div>
      <div style={{color:'#848484',paddingTop:'20px',fontFamily:'monospace',fontSize:'16px'}} >Keys Pressed: <span style={{color:'#d82934'}}>{keyPressCount}</span></div>
      
    </div>
  );
};

export default Statistics;
