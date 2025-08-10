import React, { useState, useEffect } from 'react';
import './PortfolioSection.css';
import { useInView } from 'react-intersection-observer';

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projects/');
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
        <h2 className="section-title">Quelques projets déjà réalisés</h2>
        <p className="section-subtitle">
          Voici un aperçu de mon travail. Un aperçu de ce que l'on pourrait créer ensemble.
        </p>
        <div className="portfolio-grid">
          {loading && <p>Chargement des projets...</p>}
          {error && <p>Une erreur est survenue : {error}</p>}

          {!loading && !error && projects.length > 0 ? (
            projects.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <div className="portfolio-image-container">
                  {/* L'URL de l'image vient maintenant de l'API */}
                  <img src={`http://127.0.0.1:8000${project.image}`} alt={project.title} className="portfolio-image" />
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-type">{project.type}</p>
                  <div className="portfolio-stack">
                    {project.stack.map((tech, i) => (
                      <span className="stack-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                    Voir en ligne
                  </a>
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