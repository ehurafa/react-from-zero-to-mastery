import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'

function App() {
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
    </div>
  );
}

export default App;
