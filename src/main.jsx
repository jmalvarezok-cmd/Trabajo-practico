import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/general.css'; // <--- Asegúrate de que esta línea esté presente y la ruta sea correcta

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);