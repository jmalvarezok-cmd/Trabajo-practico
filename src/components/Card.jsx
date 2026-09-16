import React from 'react';
import { Link } from 'react-router-dom';

function Card({ titulo, imagen, talles }) {
  return (
    <article className="cards">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h3>{titulo}</h3>
        <div>
          <label>Talle</label>
          <select name="Talle">
            {talles.map((talle) => (
              <option key={talle} value={talle}>{talle}</option>
            ))}
          </select>
        </div>
        <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
      </div>
    </article>
  );
}

export default Card;