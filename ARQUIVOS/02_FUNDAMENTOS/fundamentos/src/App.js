import FirstComponent from './components/FirstComponent'

import './App.css';

// comment inline

function App() {
  /* 
    block comment
  */
  return (
    <div className="App">
      { /* comment jsx */ }
      <h1>Fundamentos React</h1>
      <FirstComponent />
    </div>
  );
}

export default App;
