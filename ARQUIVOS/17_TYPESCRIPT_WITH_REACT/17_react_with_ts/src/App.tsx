import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 1- vars 
  const name: string  = "Rafael";
  const age: number = 32;
  const isWorking: boolean = true;

  return (
   <div className="app">
    <h1>Typescript with React</h1>
    <h2>Nome: {name}</h2>
    <p>Idade: {age}</p>
    { isWorking && (
      <p>Está trabalhando!</p>
    )}
   </div>
  );
}

export default App;
