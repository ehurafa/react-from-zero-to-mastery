import logo from './logo.svg';
import './App.css';
import Skyline from './assets/skyline.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionRender';
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

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
      <div>
        <CarDetails brand={'Chevrolet'} km={1000} color={'azul'} newCar={true}/>
        <CarDetails brand={'Ford'} km={0} color={'verde'} newCar={false} />
      </div>
    </div>
  );
}

export default App;
