// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PantallaListaPersonaje from "./pages/PantallaListaPersonaje.jsx";
import PantallaDetallePersonaje from "./pages/PantallaDetallePersonaje.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantallaListaPersonaje />} />
        <Route path="/personaje/:id" element={<PantallaDetallePersonaje />} />
      </Routes>
    </Router>
  );
}

export default App;
