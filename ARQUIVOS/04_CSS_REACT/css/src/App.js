import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'
import { useState } from 'react'

function App() {

  const n = 1
  const [name, setName] = useState('Rafael');
  const redTitle = true

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este é um parágrafo do App</p>
      <p style={{
        color: 'orange',
        fontSize: '40px',
        padding: '20px'
      }}>Esse parágrafo foi estilizado de forma inline</p>
      <h2 style={ n < 10 ? ({color: 'purple'}) : ({ color: 'tomato'})}>CSS dinâmico</h2>

      <h2 style={ 
        name === 'Rafael'
          ? { color: 'green', backgroundColor: '#000' }
          : null
        }>Teste</h2>

        <h2 className={ redTitle ? 'red-title' : 'title' }>Este título vai ter classe dinâmica</h2>
    </div>
  );
}

export default App;
