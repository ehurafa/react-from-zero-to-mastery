import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <MyForm user={{ name: 'Obama', email: 'president@presidente.com', bio: 'Estusiasta', role: 'admin'}}/>
    </div>
  );
}

export default App;
