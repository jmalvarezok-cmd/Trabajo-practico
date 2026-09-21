import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    
      <a 
        href="https://wa.me/tu_numero" 
        className="whatsaap-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i> WhatsApp
      </a>
      <Footer />
    </div>
  );
}

export default Layout;