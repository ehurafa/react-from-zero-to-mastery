import FirstComponent from './components/FirstComponent'

import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

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
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
