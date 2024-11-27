import React from 'react';
import './Projets.css';
import images from '../../data/images';

function Projets() {
  return (
    <section className="projets-all" id="projets">
      <h2>Projets</h2>
      <div className="projets-all">
        <div className="projets-card">
          <a href="https://jr78190.github.io/booki/" target="_blank" className="lien-projet">
            <h3 className="projets-title">Booki</h3>
            <p className="projets-description">
              Réalisée l'interface d'un site de voyage en utilisant HTML, CSS avec une version responsive
            </p>
          </a>

          <div className="projets-icons">
            <a href="https://github.com/Jr78190/booki" target="_blank">
              <img src={images.GitHub} alt="Booki" className="icon-image" title="Voir le code"/>
            </a>
          </div>
        </div>

        <div className="projets-card">
          <a href="https://jr78190.github.io/OhMyFood/" target="_blank" className="lien-projet">
            <h3 className="projets-title">OhMyFood</h3>
            <p className="projets-description">
              Réalisée un site de restauration en mobile first en utilisant SASS et en créant des animations modernes
            </p>
          </a>

          <div className="projets-icons">
            <a href="https://github.com/Jr78190/OhMyFood" target="_blank">
              <img src={images.GitHub} alt="OhMyFood" className="icon-image" title="Voir le code" />
            </a>
          </div>
        </div>

        <div className="projets-card">
          <a href="https://jr78190.github.io/kasa/" target="_blank" className="lien-projet">
            <h3 className="projets-title">Kasa</h3>
            <p className="projets-description">
              Implémenter le Front-End d'une agence de location de logement avec React ainsi que React Router
            </p>
          </a>

          <div className="projets-icons">
            <a href="https://github.com/Jr78190/kasa" target="_blank">
              <img src={images.GitHub} alt="Kasa" className="icon-image" title="Voir le code" />
            </a>
          </div>
        </div>
        
        <div className="projets-card">
          <a href=" https://jr78190.github.io/ArgentBank-/" target="_blank" className="lien-projet">
            <h3 className="projets-title">ArgentBank</h3>
            <p className="projets-description">
              Implémenter le Front en utilisant React et Redux, ainsi que faire des appels API via Swagger
            </p>
          </a>

          <div className="projets-icons">
            <a href="https://github.com/Jr78190/ArgentBank-" target="_blank">
              <img src={images.GitHub} alt="ArgentBank" className="icon-image" title="Voir le code" />
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
}

export default Projets;
