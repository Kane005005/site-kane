import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importe les icônes
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>K-Web</Link>

        {/* Bouton Hamburger pour mobile */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu de navigation */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link></li>
          <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>À Propos</Link></li>
          <li><Link to="/contact" className="cta-button" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;