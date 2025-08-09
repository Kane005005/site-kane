import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  // Remplace le numéro ci-dessous par ton numéro de téléphone, avec le code pays
  const phoneNumber = '+22365664539';
  const message = encodeURIComponent('Bonjour K-Web, j’ai une question concernant un projet !');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-icon-link" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contacter via WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppIcon;