import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, takeTest,incrementByAmount } from '../counterSlice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Timer from '../timer';
import Statistics from './Statistics';

import './typingtest.css'


function TypingTest({ question}) {

  
  const [userInput, setUserInput] = useState('');
  const [wrongIndexes, setWrongIndexes] = useState([]);
  const [startTest, setStartTest] = useState(false);
  const ref = useRef(0); // used as index
  const dispatch = useDispatch();

  const checkKey=(e)=>{
    console.log(ref)
    if(e.key == question[ref.current]){
      dispatch(increment());ref.current++;
      console.log(e.key)
    }
  }

  const HighlightedText = ({ text, highlight }) => {
    if (!highlight) {
      return <span style={{ color: 'grey' ,fontSize:'16px'}}>{text}</span>;
    }
  
    const index = text.toLowerCase().indexOf(highlight.toLowerCase());
    if (index === -1) {
      return <span style={{ color: '#5e5e5e',fontSize:'16px' }}>{text}</span>;
    }
  
    return (
      <span>
        <span style={{ color: '#5e5e5e' ,fontSize:'16px'}}>{text.substring(0, index)}</span>
        <span style={{ color: 'orange' }}>
          {text.substring(index, index + highlight.length)}
        </span>
        <span style={{ color: '#5e5e5e' ,fontSize:'16px'}}>{text.substring(index + highlight.length)}</span>
      </span>
    );
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    if (question[0] === input) setStartTest(true);

    setUserInput(input);
    
  
    const newWrongIndexes = [];
    let i = 0;
    let j = 0;
  
    while (i < question.length && j < input.length) {
      if (question[i] !== input[j]) {
        newWrongIndexes.push(j);
        j++;
      } else {
        i++;
        j++;
        
      }
    }
    while (j < input.length) {
      newWrongIndexes.push(j);
      j++;
    }
  
    setWrongIndexes(newWrongIndexes);
  
    if (input === question) {
      setTimeout(() => {
        setStartTest(false);
        setUserInput('');
      }, 200);
    }
  };
  

  const calculateAccuracy = () => {
    
    const accuracy = ((userInput.length - wrongIndexes.length)/ userInput.length) * 100;
    return accuracy.toFixed(2); 
  }
  return (
    <div className='main'>
      <ArrowBackIcon onClick={()=>dispatch(takeTest(Boolean(false)))} style={{cursor:'pointer',color:'orange  '}} ></ArrowBackIcon>
      
      
      {/* <p className='lightgreytext' >Question: <span className='darkgreytext'> {question} </span></p> */}
      
      <div  className='question'>
        <p className='lightgreytext'>
          Question: <HighlightedText text={question} highlight={userInput} />
        </p>
      </div>
      <input 
      
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={checkKey}
        placeholder='Type here'
        style={{width:'500px'}}
        />
        <div className='container'>
        <p className='lightgreytext'>User Input:{' '}
      
        {userInput.split('').map((char, index) => (
          <span
            key={index}
            
              className={ wrongIndexes.includes(index) ? 'wrongtext' : 'darkgreytext'}
          
          >
            {char}
          </span>
        ))}
      </p>
      </div>
      <p className='lightgreytext'>
        Accuracy: <span style={{color:'#d82934'}}>{calculateAccuracy()}%</span> 
      </p>
      
{/* <button onClick={()=>setStartTest(true)}>starTest</button>
<button onClick={()=>setStartTest(false)}>stopTest</button> */}
      <Timer start={startTest}></Timer>
      <Statistics ></Statistics>
    </div>
  );
}

export default TypingTest;
