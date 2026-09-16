import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/general.css';

function Footer() {
  return (
    <footer>
      <ul className="nav-footer">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">En stock</Link></li>
        <li><Link to="/galeria">Catálogo</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div className="footer-social">
        <a href="https://www.instagram.com/" aria-label="instagram" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-instagram fa-shake" style={{ color: 'rgb(236, 243, 239)' }}></i>
        </a>
        <a href="https://www.facebook.com/?locale=es_LA" aria-label="facebook" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook fa-shake" style={{ color: 'rgb(219, 230, 223)' }}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;