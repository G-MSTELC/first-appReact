import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <div className='logo'>
          <p>Notre Boutique En Ligne</p>
        </div>
        <div className='menu'>
          <Link to="/">Accueil</Link>
          <Link to="/produits">Produits</Link>
          <Link to="/about">À Propos</Link> {/* J'ai changé "About" en "À Propos" pour la cohérence */}
        </div>
        <div className='icone'>
          <FaShoppingCart />
        </div>
      </nav>
    </header>
  );
}

export default Header;
