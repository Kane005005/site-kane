import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-dev.png'; // Crée un dossier assets et ajoute ton image

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Ton idée mérite un site. <br /> Nous, on le crée avec style.
          </h1>
          <p className="hero-tagline">
            Un site, c’est ta carte d’identité numérique. On la rend stylée.
          </p>
          <button className="cta-button">Demander un site maintenant</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Développeur travaillant sur un site web" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;