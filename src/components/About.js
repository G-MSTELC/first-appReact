import React from 'react';
// Supprimez 'useLocation' s'il n'est pas utilisé dans ce fichier
// import { useLocation } from 'react-router-dom';
//import Header from './Header';

const About = () => {
  // Supprimez 'useLocation' s'il n'est pas utilisé dans ce fichier
  // const location = useLocation();

  return (
    <>
      <div>
        <h1>À Propos de Notre Boutique en Ligne</h1>
        <p className='homeIntro'>
          Bienvenue sur notre boutique en ligne, votre destination ultime pour des produits de haute qualité à des prix imbattables. Nous sommes passionnés par la création d'une expérience de shopping en ligne exceptionnelle pour nos clients.

          Chez Notre Boutique en Ligne, nous nous efforçons de vous offrir une large gamme de produits, des dernières tendances en matière de mode aux gadgets électroniques innovants. Notre équipe dévouée travaille sans relâche pour sélectionner et vous proposer les meilleurs produits du marché.

          Notre priorité absolue est votre satisfaction. Nous sommes fiers de notre service clientèle exceptionnel et de notre engagement envers la qualité. Chaque produit que nous proposons est soigneusement examiné pour garantir sa qualité et sa durabilité.

          Explorez notre boutique en ligne pour découvrir notre sélection unique de produits. Nous espérons que vous apprécierez votre expérience de shopping chez nous et que vous deviendrez un client fidèle de Notre Boutique en Ligne.

          Merci de nous faire confiance pour répondre à vos besoins en matière de shopping en ligne.

          L'équipe de Notre Boutique en Ligne
        </p>
      </div>
    </>
  );
};

export default About;
