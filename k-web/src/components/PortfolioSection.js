import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://kweb.pythonanywhere.com/api/projects/');
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className={`portfolio-section ${inView ? 'animate' : ''}`} id="portfolio" ref={ref}>
      <div className="container">
        <h2 className="section-title">Quelques-unes de nos réalisations</h2>
        <p className="section-subtitle">
          Voici un aperçu de mon travail. Un aperçu de ce que l'on pourrait créer ensemble.
        </p>
        <div className="portfolio-grid">
          {loading && <p>Chargement des projets...</p>}
          {error && <p>Une erreur est survenue : {error}</p>}
          
          {!loading && !error && projects.length > 0 ? (
            projects.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <img src={`https://kweb.pythonanywhere.com${project.image}`} alt={project.title} className="portfolio-image" />
                <div className="card-info">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-type">{project.type}</p>
                </div>
              </div>
            ))
          ) : (
            !loading && <p>Aucun projet n'a été trouvé pour le moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
