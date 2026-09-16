import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="page-content">
      <section className="hero">
        <h1>Vértice</h1>
        <p>El punto exacto donde se cruzan la cultura urbana, el diseño y la moda.</p>
        <Link className="btn btn-primary" to="/productos">En stock</Link>
      </section>
    </main>
  );
}

export default Home;