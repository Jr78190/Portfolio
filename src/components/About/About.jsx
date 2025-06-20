import React from 'react';
import './About.css';  
import images from '../../data/images';

const About = () => {
    
  return (
    <main>
        <section className="about-all" id="about">
            <img src={images.Meliodas} className="photo-meliodas" alt="Meliodas" />
            <div className="about-text">
                <p> À Propos de moi </p>
                <h1>Je Suis</h1>
                <h2>Développeur Web </h2>
                <h3>
                Bonjour je m'appelle Jean-Rayan, <span>Développeur Web</span> , reconverti depuis 2022, j'ai débuté à 
                <span> l'ETNA</span> où j'ai acquis des bases solides en développement. Ensuite, j'ai poursuivi 
                ma formation d'intégrateur web chez<span> OpenClassrooms </span> ce qui m'a permis de renforcer mes compétences et de m’auto-former sur de nouvelles technologies et de m’adapter rapidement à différents outils.
                Actuellement, je suis à la recherche d'un poste pour mettre en pratique mes compétences dans un environnement stimulant.
                </h3>
            </div>
        </section>
    </main>

  );
}

export default About;
