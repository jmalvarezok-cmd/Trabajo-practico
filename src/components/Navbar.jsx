import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/general.css'; // O tu archivo de estilos global

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <i className="fa-solid fa-candy-cane fa-float" style={{ color: 'rgb(99, 230, 190)' }}></i>
          Vértice
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">En stock</Link></li>
          <li><Link to="/galeria">Catálogo</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;