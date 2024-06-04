import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Componentes/Layout";
import RegistroPacientes from "./Componentes/RegistroPacientes";
import Menu from "./Componentes/Menu"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/RegistroPacientes" element={<RegistroPacientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
