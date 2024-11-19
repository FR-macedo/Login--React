import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './presentation/Tela';
import Register from './presentation/Register';
import Recuperacao from './presentation/Recuperacao';
import Registradoenca from './presentation/Registradoenca';
import Medicacao from './presentation/Medicacao';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Recuperacao" element={<Recuperacao />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Medicacao" element={<Medicacao />} />
          <Route path="/Registradoenca" element={<Registradoenca />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
