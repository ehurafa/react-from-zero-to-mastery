import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <MyForm user={{ name: 'Obama', email: 'president@presidente.com'}}/>
    </div>
  );
}

export default App;
