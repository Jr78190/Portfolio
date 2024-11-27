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
                <h2>Développeur web React</h2>
                <h3>
                Bonjour je m'appelle Jean-Rayan, Développeur web junior, reconverti depuis 2022, j'ai débuté à 
                <span> l'ETNA</span> en bac+2 Avant une interruption pour manque de stage. En 2023, j'ai poursuivi 
                ma formation d'intégrateur web chez<span> OpenClassrooms </span>  
                À partir de Mars 2025, je reprendrai mes études en alternance en <span>Bachelor 3 "Concepteur de projets SI"</span> à l'ETNA.
                </h3>
            </div>
        </section>
    </main>

  );
}

export default About;
