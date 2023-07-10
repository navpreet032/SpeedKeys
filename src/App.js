import React, { useEffect, useState } from 'react';
import TypingBox from './components/TypingBox';
import TypingTest from './components/TypingTest';
import NextKeyDisplay from './components/NextKeyDisplay';
import Statistics from './components/Statistics';
import { useSelector, useDispatch } from 'react-redux';
import {Amount } from './counterSlice';
import { takeTest } from './counterSlice'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import './App.css'





const App = () => {
  const [selectedValue, setSelectedValue] = useState('1');
  const [nextKeyToBePressed, setnextKeyToBePressed] = useState();
  const [testQuestion, setTestQuestion] = useState();
  const [mode, setMode] = useState(1);
  
  const [array, setArray] = useState('onechar');

  const keyPressCount = useSelector((state) => state.counter.value);
  const isTest = useSelector((state) => state.counter.isTest)

  const dispatch = useDispatch();

  const onechar = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
  const Twochars = [
    "as",
    "ad",
    "af",
    "aj",
    "ak",
    "al",
    "a;",
    "sa",
    "sd",
    "sf",
    "sj",
    "sk",
    "sl",
    "s;",
    "da",
    "ds",
    "df",
    "dj",
    "dk",
    "dl",
    "d;",
    "fa",
    "fs",
    "fd",
    "fj",
    "fk",
    "fl",
    "f;",
    "ja",
    "js",
    "jd",
    "jf",
    "jk",
    "jl",
    "j;",
    "ka",
    "ks",
    "kd",
    "kf",
    "kj",
    "kl",
    "k;",
    "la",
    "ls",
    "ld",
    "lf",
    "lj",
    "lk",
    "l;",
    ";a",
    ";s",
    ";d",
    ";f",
    ";j",
    ";k",
    ";l"
  ];
  const threechars = [


    "sad",
    "ads",
    "fad",
    "jfk",
    "lad",
    "fjk",
    "kjl",
    "daj",
    "ksf",
    "ska",
    "djk",
    "ljk",
    "dsf",
    "jlf",
    "lks",
    "fkl",
    "fjl",
    "sdk",
    "slk",
    "fks",
    "fjd",
    "kfd",
    "kdf",
    "dsk",
    "dfs",
    "kjd",
    "dsl",
    "fks",
    "fsd",
    "kls",
    "jfl",
    "fjd",
    "kfd",
    "kdf",
    ";sk",
    "dks",
    "kjd",
    "d;l",
    "fk",
    "f;d",
    "k;s",
    ";fl",
  ];

  var words = ""

  function getNextKey() {
    const randomIndex = Math.floor(Math.random() * array.length);
    setnextKeyToBePressed(array[randomIndex]);
  }

  function makeWords() {
    dispatch(takeTest(Boolean(true)));
    if (words.length) words = []
    let selectArray = Math.floor(Math.random() * 2) ? threechars : Twochars;


    for (let i = 0; i <= 100; i++) {
      words += (selectArray[Math.floor(Math.random() * Math.random() * 5)] + " " + threechars[Math.floor(Math.random() * threechars.length)] + " ");

    }
   
   let Words = words.slice(0, -1);

    setTestQuestion(Words)
    dispatch(Amount(Number(0)))

  }

  const GetModes = (e) => {
    var value = e.target.value;
    console.log(value)
    setMode(value);
    switch (value) {
      case '1':
        setArray(onechar); break;
      case '2':
        setArray(Twochars); break;
      case '3':
        setArray(threechars); break;
      default:
        setArray(1);
    }
  }
  useEffect(() => {
    getNextKey();

  }, [keyPressCount, mode])
  
  const handelSelect=(e)=>{
    setMode(e.target.value)
    setSelectedValue(e.target.value)
  }
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handelSelect,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (

    <div className='div1'>
      <div style={{maxWidth:'300px'}}><h1 class="typewriter">The Typing Test</h1></div>


      {!isTest && (
        <>
<div >
          <NextKeyDisplay nextKey={nextKeyToBePressed} />
          <TypingBox question={nextKeyToBePressed} mode={mode} />
          <Statistics />
          </div>
<div className="form">
<FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label" style={{color:'#848484'}}>Select Mode</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={GetModes}
      >
        <FormControlLabel value="1" control={<Radio {...controlProps('1')}
        sx={{
          color: '#d82934',
          '&.Mui-checked': {
            color: 'orange',
          },
        }} />}  className='lightgreytext' label="unigram" />
        <FormControlLabel value="2" control={<Radio {...controlProps('2')}
        sx={{
          color: '#d82934',
          '&.Mui-checked': {
            color: 'orange',
          },
        }} />}  className='lightgreytext' label="bigrams" />
        <FormControlLabel value="3" control={<Radio {...controlProps('3')}
        sx={{
          color: '#d82934',
          '&.Mui-checked': {
            color: 'orange',
          },
        }} />} className='lightgreytext'label="trigrams" />
        
      </RadioGroup>
    </FormControl>
</div>
            <div>
              <p className='lightgreytext'>Start 5 min typing test</p>

              <button onClick={makeWords}>start</button>

            </div>
          
         
        </>
      )}
      {isTest && (
        <TypingTest question={testQuestion} />
      )}
    </div>
  );
};

export default App;
