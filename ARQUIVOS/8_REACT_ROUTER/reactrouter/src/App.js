
import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'

// components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product /> } />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
