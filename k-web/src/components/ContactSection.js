// k-web/src/components/ContactSection.js

import React, { useState } from 'react';
import './ContactSection.css'; // Assurez-vous que l'importation du CSS est ici et une seule fois
import { FaPhone, FaWhatsapp, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'; // Ligne d'importation unique et correcte

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch('https://kweb.pythonanywhere.com/api/contact/', {
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
        const errorData = await response.json();
        setStatus(`Une erreur est survenue : ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('Une erreur est survenue. Veuillez vérifier votre connexion.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Prenons contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              Pour toute question ou demande de devis, n'hésitez pas à me contacter par téléphone,
              email ou via mes réseaux sociaux.
            </p>
            <ul className="contact-list">
              <li>
                <a href="tel:+22395607229" className="contact-item">
                  <FaPhone className="icon" />
                  <span>+223 95 60 72 29</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/22393406704?text=Bonjour K-Web, j’ai une question concernant un projet !" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <FaWhatsapp className="icon" />
                  <span>+223 93 40 67 04</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/+22395607229" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <FaTelegramPlane className="icon" />
                  <span>+223 95 60 72 29</span>
                </a>
              </li>
              <li>
                <a href="mailto:traorekanz@gmail.com" className="contact-item">
                  <FaEnvelope className="icon" />
                  <span>traorekanz@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Envoyer le message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
