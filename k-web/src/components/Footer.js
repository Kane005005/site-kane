import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Suivez-moi</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/votre-numero" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-mentions">
          <h3>Mentions légales</h3>
          <p>&copy; {currentYear} K-Web. Tous droits réservés.</p>
          <p>Mentions légales & Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;