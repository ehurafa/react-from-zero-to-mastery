import logo from './logo.svg';
import './App.css';
import Skyline from './assets/skyline.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionRender';
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: 'BMW', color: "Preto", newCar: false, km: 5000},
    {id: 3, brand: 'Toyota', color: "Verde", newCar: false, km: 13921}
  ]

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
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
        ))}
      </div>

      <div>
        <Fragment />
      </div>
    </div>
  );
}

export default App;
