import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('Une erreur est survenue. Veuillez vérifier votre connexion.');
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2 className="section-title">Prenons contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre Nom" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre Email" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Votre Message" required></textarea>
          <button type="submit">Envoyer</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;