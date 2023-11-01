import React from 'react';
import '../App.css';
import './Hero2.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='aboutMePhoto.jpg' className='about-me-img'/>
      <h1 className="jessie-namelol">HI! I'M JESSIE WANG</h1>
      <p className='subtext'>i'm a second year student at the university of toronto :)</p>
    </div>
  );
}

export default HeroSection;