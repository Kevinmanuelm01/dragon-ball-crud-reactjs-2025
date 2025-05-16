import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento de tu app, pasa una funcion
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envialos a un endpoint. Aprende mas: https://bit.ly/CRA-vitals
reportWebVitals();
