import React from 'react';
import './WhyChooseUs.css';
import { useInView } from 'react-intersection-observer';
import { FaLock, FaBolt, FaMobileAlt, FaHandshake, FaDollarSign } from 'react-icons/fa';

const advantages = [
  { icon: <FaLock />, title: 'Sécurisé', description: 'Nous intégrons les meilleures pratiques de sécurité pour protéger votre site et vos données.' },
  { icon: <FaBolt />, title: 'Rapide', description: 'Votre site est optimisé pour un chargement ultra-rapide, essentiel pour le référencement et l’expérience utilisateur.' },
  { icon: <FaMobileAlt />, title: 'Mobile first', description: 'Votre site sera parfait sur tous les écrans : ordinateurs, tablettes et smartphones.' },
  { icon: <FaHandshake />, title: 'Accompagnement humain', description: 'Un interlocuteur dédié vous accompagne de l’idée au lancement, avec des conseils clairs et honnêtes.' },
  { icon: <FaDollarSign />, title: 'Prix abordable', description: 'Des solutions sur mesure et adaptées à votre budget, sans compromis sur la qualité.' }
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`why-choose-us-section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Pourquoi nous choisir ?</h2>
        <p className="section-subtitle">
          Pas besoin d’être dev pour avoir un site. T’as juste besoin de moi.
        </p>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div className="advantage-card" key={index}>
              <div className="advantage-icon">{advantage.icon}</div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;