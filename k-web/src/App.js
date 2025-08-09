import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhatsAppIcon from './components/WhatsAppIcon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} /> {/* Route pour la liste des articles */}
            <Route path="/blog/:slug" element={<BlogPostPage />} /> {/* Route pour un article individuel */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppIcon /> 
      </div>
    </BrowserRouter>
  );
}

export default App;