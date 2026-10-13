import React from 'react';

import { Link } from 'react-router-dom';

import heroImg from '../assets/hero.png';

import '../styles/general.css';



function Home() {

  return (

    <main className="page-content">

      <section className="hero">

        <div className="hero-text">

          <h1>Vértice</h1>

          <p>El punto exacto donde se cruzan la cultura urbana, el diseño y la moda.</p>

          <Link className="btn btn-primary" to="/productos">En stock</Link>

        </div>

        <div className="hero-image">

          <img src={heroImg} alt="Banner Vértice - Cultura urbana" />

        </div>

      </section>

    </main>

  );

}



export default Home; 