import './index.css';
import Cards from './components/cards';
import Letters from './components/letters';
import styled from "styled-components";
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const ButtonGroup = styled.div`
  display: block;
  color: white;
  font-size: 20px;
  padding: 10px;
  float: right;
  margin-top:2rem;
  margin-left: -50%;
  margin-right: 10rem;
  border-radius: 0px;
  cursor: pointer;
  
`

function App() {
  
  
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
  return (
    
    <div className="App" >
      <img className='logo' src={require("./assets/logo.png")} alt="logo" />
      <ButtonGroup>
        
  <Button  className='button'> sauvgarder </Button>
  <Button  href='#plaint' style={{ textDecoration: 'none'}} id='plaint' className='button'> encryption </Button>
  <Button href='#cipher' style={{ textDecoration: 'none'}} id='cipher' className='button'> decryption </Button>
</ButtonGroup>
      <div className="reflect">
        <Cards></Cards>
      </div>
      <div className="rotors">
        <div>
        <Cards></Cards>
        <Cards></Cards>
        </div>
        
      </div>
      <div className="rotors">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <div className="rotors">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <div className="rotors">
        <Letters></Letters>
      </div>
      <div className="textblocs">
        <textarea id='plaint' className="insidebloc" type="text"   placeholder='plaint text' wrap='soft'  cols="30" rows="4"></textarea>
        <div className="config">
            <div className='configblocs'>
            <input className="card" type="text"  style={{marginRight :4}}></input>
            <input className="card" type="text"  style={{marginRight :4}} ></input>
            <input className="card" type="text"  style={{marginRight :4}}></input>
            </div>
            <div className='configblocs'>
            <input className="card" type="text"   style={{marginRight :4}}></input>
            <input className="card" type="text"   style={{marginRight :4}}></input>
            <input className="card" type="text"   style={{marginRight :4}}></input>
            </div>
            <div className='configblocs'>
            <input className="card" type="text"   style={{marginRight :4}}></input>
            <input className="card" type="text"   style={{marginRight :4}} ></input>
            <input className="card" type="text"   style={{marginRight :4}}></input>
            </div>
        </div>
        
        <textarea id='cipher' className="insidebloc" type="text"   placeholder='cipher text' wrap='soft'  cols="30" rows="4"></textarea>
      </div>
    </div>
  );
}

export default App;
