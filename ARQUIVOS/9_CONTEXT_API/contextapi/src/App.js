import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'

import Pagea from './pages/Pagea'
import Pageb from './pages/Pageb'
import Pagec from './pages/Pagec'

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pagea" element={<Pagea />} />
          <Route path="/pageb" element={<Pageb />} />
          <Route path="/pagec" element={<Pagec />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
