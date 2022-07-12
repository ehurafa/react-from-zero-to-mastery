import FirstComponent from './components/FirstComponent'

import './App.css';
import TemplateExpressions from './components/TemplateExpressions';

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
    </div>
  );
}

export default App;
