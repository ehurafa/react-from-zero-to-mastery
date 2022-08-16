import logo from './logo.svg';
import './App.css';
import Skyline from './assets/skyline.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionRender';
import ShowUserName from './components/ShowUserName'

function App() {
  return (
    <div className="App">
      <h1>Avançado em React</h1>
      <div>
        <img src="/supra.jpg" alt="" />
      </div>
      <div>
        <img src="{Skyline}" alt="" />
      </div>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <div>
        <ShowUserName name='Rafael' />
      </div>
    </div>
  );
}

export default App;
