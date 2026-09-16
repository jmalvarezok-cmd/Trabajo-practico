import React, { useState } from 'react';

function Contact() {
    
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    motivo: '',
    firstVisit: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('--- DATOS DEL FORMULARIO ENVIADOS ---');
    console.log(formData);
    alert('¡Formulario enviado con éxito! Revisá la consola para ver los datos.');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      lastname: '',
      phone: '',
      email: '',
      motivo: '',
      firstVisit: '',
      comment: ''
    });
    console.log('Formulario reseteado');
  };

  return (
    <main>
      <h1 className="page-title">Contacto</h1>
      <section className="s-section">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input 
              type="text" 
              name="lastname" 
              id="lastname" 
              value={formData.lastname} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              placeholder="011" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Motivo de consulta</label>
            <select 
              name="motivo" 
              id="motivo" 
              value={formData.motivo} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Seleccioná una opción</option>
              <option value="stock">Consulta sobre stock y talles</option>
              <option value="envios">Estado de envíos</option>
              <option value="otro">Otro motivo</option>
            </select>
          </div>
          
          <fieldset className="form-group">
            <legend>¿Es tu primera vez acá?</legend>
            <div className="radio-group">
              <div>
                <input 
                  type="radio" 
                  id="first-yes" 
                  name="firstVisit" 
                  value="si" 
                  checked={formData.firstVisit === 'si'} 
                  onChange={handleChange} 
                  required 
                />
                <label htmlFor="first-yes">Sí</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  id="first-no" 
                  name="firstVisit" 
                  value="no" 
                  checked={formData.firstVisit === 'no'} 
                  onChange={handleChange} 
                  required 
                />
                <label htmlFor="first-no">No</label>
              </div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="comment">Mensaje</label>
            <textarea 
              name="comment" 
              id="comment" 
              placeholder="Contanos en qué te podemos ayudar" 
              value={formData.comment} 
              onChange={handleChange} 
              required 
              rows="5" 
              maxLength="2000"
            ></textarea>
          </div>

          <div className="form-group">
            <p>Encontranos en...</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15623.340398208638!2d-58.41211668792998!3d-34.59397632311915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1785515474464!5m2!1ses!2sar" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>  

          <div className="form-buttons">
            <button className="btn btn-primary" type="submit">Enviar</button>
            <button className="btn btn-secondary" type="reset">Limpiar</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;