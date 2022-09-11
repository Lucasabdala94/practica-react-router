import React from 'react';
import './style.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import App from './app';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Tacos from './components/Tacos';
import NavLinkPersonalizado from './components/NavLinkPersonalizado';
import { Carousel } from './components/Carousel';
export default function App() {
  let activeClassName = 'underline';
  const CARDS = 10;

  const Card = ({ title, content }) => (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
  return (
    <div>
      <header>
        <h1>Titulo Header APP</h1>
        <nav className="navbar">
          <ul>
            <li>
              <NavLinkPersonalizado to="/" clase="nombreclase">
                Home
              </NavLinkPersonalizado>
            </li>
            <li>
              <NavLinkPersonalizado to="/contacto" clase="nombreclase">
                Contacto
              </NavLinkPersonalizado>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <hr />
      <hr />
      <div className="app">
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <Card
              title={'Card ' + (i + 1)}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          ))}
        </Carousel>
      </div>
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Home />} />
        <Route path="/tacos" element={<Tacos />} />
      </Routes>
    </div>
  );
}
