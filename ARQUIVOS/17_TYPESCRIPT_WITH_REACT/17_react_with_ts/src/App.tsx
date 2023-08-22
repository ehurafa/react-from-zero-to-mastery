import React from 'react';
import logo from './logo.svg';
import './App.css';

// 4 - component import
import FirstComponent from './components/FirstComponent';

// 5 - destructuring props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

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
    <FirstComponent />
    <SecondComponent name="Second" />
    <Destructuring
      title="First Post"
      content="Other content"
      commentsQty={5}
      tags={['js', 'ts']}
      category={ Category.TS }
      />
    <State />
   </div>
  );
}

export default App;
