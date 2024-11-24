import React from 'react';
import './App.css'
import Navbar from './components/Nav/Nav';
import About from './components/About/About';
import BannerProfil from './components/BannerP/BannerProfil';
import Competences from './components/Competences/Competences';
import Projets from './components/Projets/Projets';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About/>
      <BannerProfil/>
      <Competences/>
      <Projets/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
