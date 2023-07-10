import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment} from '../counterSlice'
import './typingbox.css'

function TypingBox({ question, mode }) {

  console.log(typeof(question))
  const [userInput, setUserInput] = useState('');
  const [wrongIndexes, setWrongIndexes] = useState([]);
  
  
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    const input = e.target.value;
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
        dispatch(increment())
      setUserInput('');
      }, 200);
    }
  };

  const calculateAccuracy = () => {
    
    const accuracy = ((userInput.length - wrongIndexes.length)/ userInput.length) * 100;
    
    return accuracy.toFixed(2); 
  }
  return (
    <div >
      
      <input
        type="text"
        placeholder='Type here'
        value={userInput}
        onChange={handleInputChange}
        
      />
      <p>
        <span className='lightgreytext' style={{padding:'10px'}}>User Input:{' '}</span>
        {userInput.split('').map((char, index) => (
          <span
            key={index}
            className={wrongIndexes.includes(index) ?'wrongtext':'darkgreytext'}
          >
            {char}
          </span>
        ))}
      </p>
      <p>
        <span className='lightgreytext' style={{padding:'10px'}}>Accuracy : </span> <span className='darkgreytext'>{calculateAccuracy()}%</span> 
      </p>
      
    </div>
  );
}

export default TypingBox;
