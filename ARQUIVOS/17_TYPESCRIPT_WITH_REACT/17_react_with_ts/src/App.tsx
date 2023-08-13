import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 1- vars 
  const name: string  = "Rafael";
  const age: number = 32;
  const isWorking: boolean = true;

  // 2 - functions in components
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
   <div className="app">
    <h1>Typescript with React</h1>
    <h2>Nome: {name}</h2>
    <p>Idade: {age}</p>
    { isWorking && (
      <p>Está trabalhando!</p>
    )}
    <h3>{ userGreeting(name) }</h3>
   </div>
  );
}

export default App;
