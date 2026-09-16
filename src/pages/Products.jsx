import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <main>
      <h1 className="page-title">En Stock</h1>
      <section className="s-section">
        <div className="products-container">
          <p>Explorá nuestra selección de productos disponibles en stock actualmente.</p>
          
          <section className="cards-section">
            <div className="cards-grid">
              
              {/* Producto 1 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_672786551731624655.jpg" alt="Vans Old Skool" />
                <div className="card-body">
                  <h3>Vans Old Skool</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 2 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_11306050933808859630.jpg" alt="Vans Slip-On" />
                <div className="card-body">
                  <h3>Vans Slip-On</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 3 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_13221065157883434233.jpg" alt="Vans UltraRange Rapidweld" />
                <div className="card-body">
                  <h3>Vans UltraRange Rapidweld</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 4 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_5372182386416185372.jpg" alt="Adidas Samba OG" />
                <div className="card-body">
                  <h3>Adidas Samba OG</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 5 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_12846516172625526055.jpg" alt="Adidas Forum Low" />
                <div className="card-body">
                  <h3>Adidas Forum Low</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 6 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_14821937259847137391.jpg" alt="Adidas Campus 00s" />
                <div className="card-body">
                  <h3>Adidas Campus 00s</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 7 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_12714124341831745649.jpg" alt="Nike Air Force 1 '07" />
                <div className="card-body">
                  <h3>Nike Air Force 1 '07</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 8 */}
              <article className="cards">
                <img src="/assets/img/d94b1df4-390f-4ab0-8abf-354b87a94346.jfif" alt="Air Jordan 1 High OG" />
                <div className="card-body">
                  <h3>Air Jordan 1 High OG</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

              {/* Producto 9 */}
              <article className="cards">
                <img src="/assets/img/watermarked_img_8738323553183663840.jpg" alt="Nike Court Vision Low" />
                <div className="card-body">
                  <h3>Nike Court Vision Low</h3>
                  <div>
                    <label>Talle</label>
                    <select name="Talle">
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                    </select>
                  </div>
                  <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
                </div>
              </article>

            </div>
          </section>

        </div>
      </section>
    </main>
  );
}

export default Products;