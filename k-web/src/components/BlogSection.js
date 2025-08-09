import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';
import { useInView } from 'react-intersection-observer';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blog-posts/');
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles de blog:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className={`blog-section ${inView ? 'animate' : ''}`} id="blog" ref={ref}>
      <div className="container">
        <h2 className="section-title">Le Blog : Tutos & Astuces</h2>
        <p className="section-subtitle">
          Des conseils simples pour naviguer sur le web sans être un expert.
        </p>
        <div className="blog-grid">
          {loading && <p>Chargement des articles...</p>}
          {error && <p>Une erreur est survenue : {error}</p>}
          
          {!loading && !error && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <div className="blog-card" key={index}>
                <img src={`http://127.0.0.1:8000${post.image}`} alt={post.title} className="blog-image" />
                <div className="blog-info">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-date">{new Date(post.created_at).toLocaleDateString('fr-FR')}</p>
                  <p className="blog-summary">{post.summary}</p>
                  
                  {/* Utilise le composant Link pour la navigation interne */}
                  <Link to={`/blog/${post.slug}`} className="read-more-btn">Lire l'article</Link>
                </div>
              </div>
            ))
          ) : (
            !loading && <p>Aucun article de blog n'a été trouvé pour le moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;