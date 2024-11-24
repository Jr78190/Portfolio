import React from 'react';
import './Contact.css'; 
import images from '../../data/images';

function Contact() {
  return (
    <section className="contact-all" id="contact">
      <div className="contact-card">
        <div className="contact-message">
          <h2>Un sujet dans lequel vous voulez discuter ?</h2>
          <p>N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
        </div>

        <div className="contact-info-left">
          <div className="contact-socials">
            <h3>Retrouvez-moi sur les réseaux sociaux :</h3>
            <div className="social-all">
              <a href="https://www.instagram.com/jr_78190/" target="_blank" rel="noopener noreferrer">
                <img className="social-icons" src={images.Instagram} alt="Instagram" title="Instagram"/>
              </a>
              <a href="https://www.linkedin.com/in/jean-rayan-samba-buesso-547b88197/" target="_blank" rel="noopener noreferrer">
                <img className="social-icons" src={images.Linkedin} alt="Linkedin" title="Linkedin"/>
              </a>
              <a href="https://github.com/Jr78190" target="_blank" rel="noopener noreferrer">
                <img className="social-icons" src={images.GitHub} alt="GitHub" title="GitHub"/>
              </a>
              <a href="https://www.malt.fr/profile/jeanrayansambabuesso" target="_blank" rel="noopener noreferrer">
                <img className="social-icons" src={images.Malt} alt="Malt" title="Malt"/>
              </a>
            </div>
          </div>

          <div className="contact-info-right">
            <h3>Mes coordonnées :</h3>
            <p>
            Email : 
            <a href="mailto:Jeanrayan.sb@gmail.com"> Jeanrayan.sb@gmail.com</a>
            </p>
            <p>Localisation : Paris, Ile-De-France</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
