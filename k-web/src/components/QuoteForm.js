import React, { useState, useEffect } from 'react';
import './QuoteForm.css';

const QuoteForm = () => {
  const [siteType, setSiteType] = useState('vitrine');
  const [pageCount, setPageCount] = useState(1);
  const [hasLogo, setHasLogo] = useState(false);
  const [hasPayment, setHasPayment] = useState(false);
  const [budget, setBudget] = useState('1000-2000');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Calcul de l'estimation basé sur les sélections de l'utilisateur
  useEffect(() => {
    let price = 0;

    switch (siteType) {
      case 'vitrine':
        price += 1200;
        break;
      case 'ecommerce':
        price += 2500;
        break;
      case 'blog':
        price += 1000;
        break;
      default:
        price += 1200;
    }

    price += (pageCount - 1) * 150; // 150€ par page supplémentaire
    if (hasLogo) price += 300;
    if (hasPayment) price += 500;

    setEstimatedPrice(price);
  }, [siteType, pageCount, hasLogo, hasPayment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on enverra les données du formulaire à ton backend (Django)
    console.log({ siteType, pageCount, hasLogo, hasPayment, budget });
    alert(`Demande envoyée ! Estimation indicative : ${estimatedPrice}€`);
  };

  return (
    <section className="quote-form-section" id="devis">
      <div className="container">
        <h2 className="section-title">Un devis rapide pour votre projet</h2>
        <p className="section-subtitle">
          Pas sûr de votre budget ? Obtenez une estimation en quelques clics.
        </p>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="site-type">Type de site :</label>
            <select id="site-type" value={siteType} onChange={(e) => setSiteType(e.target.value)}>
              <option value="vitrine">Site Vitrine</option>
              <option value="ecommerce">Site e-commerce</option>
              <option value="blog">Blog personnel</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="page-count">Nombre de pages :</label>
            <input
              type="number"
              id="page-count"
              value={pageCount}
              onChange={(e) => setPageCount(e.target.value)}
              min="1"
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="has-logo"
              checked={hasLogo}
              onChange={(e) => setHasLogo(e.target.checked)}
            />
            <label htmlFor="has-logo">Besoin d'un logo ? (+300€)</label>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="has-payment"
              checked={hasPayment}
              onChange={(e) => setHasPayment(e.target.checked)}
            />
            <label htmlFor="has-payment">Paiement en ligne ? (+500€)</label>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget approximatif :</label>
            <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="1000-2000">1000€ - 2000€</option>
              <option value="2000-4000">2000€ - 4000€</option>
              <option value="4000+">4000€ et plus</option>
            </select>
          </div>

          <div className="estimated-price">
            Estimation indicative : <span>{estimatedPrice}€</span>
          </div>

          <button type="submit" className="cta-button">Envoyer ma demande</button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;