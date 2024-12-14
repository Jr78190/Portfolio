import React from 'react';
import './Nav.css'; 

const Navbar = () => {
  return (
   <header className='header-navbar'>
    <nav className="navbar-all">
        <div className="navbar-left">
            <span>/* Jean-Rayan */</span>
        </div>
        
        <div className="navbar-right">
            <ul>
                <li className="item-all"><a href="#competences">Compétences</a></li>
                <li className="item-all"><a href="#projets">Projets</a></li>
                <li className="item-all"><a href="#contact">Contact</a></li>
                <li className="item-cv">
                    <a href="./CVBachelor3.pdf" download="CV Bachelor 3">CV</a></li>
            </ul>
        </div>
    </nav>
   </header> 
  );
};

export default Navbar;
