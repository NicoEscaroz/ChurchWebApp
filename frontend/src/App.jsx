import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/inicio/inicio';
import Eventos from './pages/Events/Events';
import Grupos from './pages/Groups/Groups';
import Oraciones from './pages/Prayers/Prayers';
import Medios from './pages/Media/Medios';
import Donaciones from './pages/Donations/Donations';
import Configuration from './pages/Configuration/Configuration';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/oraciones" element={<Oraciones />} />
          <Route path="/medios" element={<Medios />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/configuracion" element={<Configuration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
