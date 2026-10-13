import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/general.css';
import './styles/productos.css';
import './styles/galeria.css';
import './styles/contacto.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);