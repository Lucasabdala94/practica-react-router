import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import App from './app';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Tacos from './components/Tacos';

export default function App() {
  return (
    <div>
      <header>
        <h1>Titulo Header APP</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <hr />
      <hr />

      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Home />} />
        <Route path="/tacos" element={<Tacos />} />
      </Routes>
    </div>
  );
}
