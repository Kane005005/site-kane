import React from 'react';
import './AboutSection.css';
import { useInView } from 'react-intersection-observer';
import modiboImage from '../assets/modibo.jpg';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={`about-section ${inView ? 'animate' : ''}`} id="about" ref={ref}>
      <div className="container about-content">
        <div className="about-image-container">
          <img src={modiboImage} alt="Modibo Kane" className="about-image" />
        </div>
        <div className="about-text">
          <h2 className="section-title">À propos de K-Web</h2>
          <p className="about-intro">
            Je suis Modibo Kane, étudiant en Hydraulique Agricole au Mali et développeur web passionné.
          </p>
          <p className="about-description">
            En parallèle de mes études, je me spécialise dans la création de sites web intuitifs, modernes et adaptés aux besoins réels des utilisateurs : étudiants, entrepreneurs, associations, projets agricoles et plus encore.
          </p>
          <p className="about-description">
            J’ai lancé K-Web, mon propre service de création web, avec une vision claire : offrir des solutions numériques efficaces, esthétiques et accessibles, même avec peu de moyens. Je crois que chaque idée mérite une vitrine digitale — et je suis là pour la créer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;