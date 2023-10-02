import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/produits">Nos Produits</Link>
          <Link to="/a-propos">À propos de la Boutique</Link>
          <Link to="/contactez-nous">Contactez-nous</Link>
          <Link to="/politique">Notre Politique</Link>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Ghalem Mouas. Tous les droits sont réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
