import React from 'react';
import './Nav.css'; 
// import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
   <header className='header-navbar'>
    <nav className="navbar-all">
        <div className="navbar-left">
            <span>/* Jean-Rayan SB */</span>
        </div>
        
        <div className="navbar-right">
            <ul>
                <li className="item-all"><a href="#competences">Compétences</a></li>
                <li className="item-all"><a href="#projets">Projets</a></li>
                <li className='item-all'><a href="#contact">Contact</a></li>
                <li className="item-contact"><a href="CVJR.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
            </ul>
        </div>
        
    </nav>
   </header> 

  );
}

export default Navbar;
