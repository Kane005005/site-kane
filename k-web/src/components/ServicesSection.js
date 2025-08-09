import React from 'react';
import './ServicesSection.css';
import { useInView } from 'react-intersection-observer';
import { FaLaptop, FaShoppingBag, FaPencilRuler, FaPenNib, FaCode, FaMobileAlt } from 'react-icons/fa';

const services = [
  { icon: <FaLaptop />, title: 'Site Vitrine', description: 'Présentez votre entreprise de manière professionnelle et élégante sur le web.' },
  { icon: <FaShoppingBag />, title: 'Site e-commerce', description: 'Vendez vos produits en ligne avec une boutique sécurisée et facile à gérer.' },
  { icon: <FaPenNib />, title: 'Blog personnel', description: 'Partagez vos passions et vos idées avec le monde via une plateforme de blog unique.' },
  { icon: <FaCode />, title: 'Refonte de site', description: 'Donnez un coup de jeune à votre site existant pour le rendre moderne et performant.' },
  { icon: <FaPencilRuler />, title: 'Design sur mesure', description: 'Un design 100% personnalisé qui reflète parfaitement votre identité de marque.' },
  { icon: <FaMobileAlt />, title: 'Formulaires dynamiques', description: 'Créez des formulaires de contact, de devis ou de quiz interactifs et performants.' }
];

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`services-section ${inView ? 'animate' : ''}`} id="services" ref={ref}>
      <div className="container">
        <h2 className="section-title">Nos Services pour donner vie à votre projet</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;