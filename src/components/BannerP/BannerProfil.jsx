import React from 'react'; 
import './BannerProfil.css';
import images from '../../data/images';

function BannerProfil() {
  return (
    <section className="bannerP-all">
        <div className="image-bannerP">
            <img src={images.Banner} className="photo-bannerP" alt="Image Banner Profil" />
            <div className="profil-text">Actuellement en recherche d'emploi</div>
        </div>
    </section>
  );
}

export default BannerProfil;
