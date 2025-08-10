import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/blog-posts/${slug}/`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="loading-message">Chargement de l'article...</div>;
  }

  if (error) {
    return <div className="error-message">Une erreur est survenue : {error}</div>;
  }

  if (!post) {
    return <div className="not-found-message">Article non trouvé.</div>;
  }

  return (
    <main className="blog-post-page">
      <div className="container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">Publié le : {new Date(post.created_at).toLocaleDateString()}</p>
        <img src={`http://127.0.0.1:8000${post.image}`} alt={post.title} className="post-image" />
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  );
};

export default BlogPostPage;