import React from 'react';
import Card from '../components/Card';

function Products() {
  const listaTalles = ['38', '39', '40', '41', '42', '43'];

  const productosData = [
    { titulo: "Vans Old Skool", imagen: "/assets/img/watermarked_img_672786551731624655.jpg" },
    { titulo: "Vans Slip-On", imagen: "/assets/img/watermarked_img_11306050933808859630.jpg" },
    { titulo: "Vans UltraRange Rapidweld", imagen: "/assets/img/watermarked_img_13221065157883434233.jpg" },
    { titulo: "Adidas Samba OG", imagen: "/assets/img/watermarked_img_5372182386416185372.jpg" },
    { titulo: "Adidas Forum Low", imagen: "/assets/img/watermarked_img_12846516172625526055.jpg" },
    { titulo: "Adidas Campus 00s", imagen: "/assets/img/watermarked_img_14821937259847137391.jpg" },
    { titulo: "Nike Air Force 1 '07", imagen: "/assets/img/watermarked_img_12714124341831745649.jpg" },
    { titulo: "Air Jordan 1 High OG", imagen: "/assets/img/d94b1df4-390f-4ab0-8abf-354b87a94346.jfif" },
    { titulo: "Nike Court Vision Low", imagen: "/assets/img/watermarked_img_8738323553183663840.jpg" }
  ];

  return (
    <main>
      <h1 className="page-title">En Stock</h1>
      <section className="s-section">
        <div className="products-container">
          <p>Explorá nuestra selección de productos disponibles en stock actualmente.</p>
          
          <section className="cards-section">
            <div className="cards-grid">
              {productosData.map((prod, index) => (
                <Card 
                  key={index} 
                  titulo={prod.titulo} 
                  imagen={prod.imagen} 
                  talles={listaTalles} 
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Products;