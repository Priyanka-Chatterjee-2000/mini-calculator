import React,{useState} from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

function App() {
  const[input,setInput]=useState(" ");

const clickInput=val=>()=>
{ 

  if(val==="=")
  {
    try{
      setInput(math.evaluate(input).toString())
    }
     catch{
       setInput("ERROR")
     }
  }
  else
  {
setInput(input+val)
  }

   
}


  return (
    <div className="App">
      <div className="calculator-wrapper">
       <Input>{input}</Input>
        <div className="row">
            <Button handleClick={clickInput} val="1"/>
            <Button handleClick={clickInput} val="2"/> 
            <Button handleClick={clickInput} val="3"/>
            <Button handleClick={clickInput} val="+"/>          
          </div>
          <div className="row">
            <Button handleClick={clickInput} val="4"/>
            <Button handleClick={clickInput} val="5"/> 
            <Button handleClick={clickInput} val="6"/>
            <Button handleClick={clickInput} val="-"/>          
          </div>
          <div className="row">
            <Button handleClick={clickInput} val="7"/>
            <Button handleClick={clickInput} val="8"/> 
            <Button handleClick={clickInput} val="9"/>
            <Button handleClick={clickInput} val="*"/>          
          </div>
          <div className="row">
            <Button handleClick={clickInput} val="0"/>
            <Button handleClick={clickInput} val="."/> 
            <Button handleClick={clickInput} val="="/>
            <Button handleClick={clickInput} val="/"/>          
          </div>
          <div className="row">
            <ClearButton handleClear={()=>setInput('')}>All Clear</ClearButton> 
            <ClearButton handleClear={()=>setInput(input.substring(0,input.length-1))}> Clear</ClearButton>       
          </div>
        </div>
    </div>
  );
}

export default App;
