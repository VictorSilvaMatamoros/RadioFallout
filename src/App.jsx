// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink  } from 'react-router';

import ScrollHorizontal from './components/ScrollHorizontal';
import Fallout3 from './views/Fallout3';
import FalloutNewVegas from './views/FalloutNewVegas';
import Fallout4 from './views/Fallout4';

function App() {
  return (
    <Router>
      <div className="App">
        { /*
        <h1>📻 Radio Fallout</h1>
        
        <nav>
        <ul style={{ display: 'flex', gap: '20px', justifyContent: 'center', listStyle: 'none', marginBottom: '20px' }}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/fallout3" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Fallout 3
              </NavLink>
            </li>
            <li>
              <NavLink to="/newvegas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Fallout New Vegas
              </NavLink>
            </li>
            <li>
              <NavLink to="/fallout4" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Fallout 4
              </NavLink>
            </li>
          </ul>
        </nav>
        */}
        {/* Rutas */}
        <Routes>
        <Route path="/" element={<ScrollHorizontal />} /> {/* 🔄 AQUÍ CAMBIAMOS */}
          <Route path="/fallout3" element={<Fallout3 />} />
          <Route path="/newvegas" element={<FalloutNewVegas />} />
          <Route path="/fallout4" element={<Fallout4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
