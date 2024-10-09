import React from 'react';
import './Hero2.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='./RandomPics/aboutMePhoto.jpg' className='about-me-img'/>
      <h1 className="jessie-namelol">HI! I'M JESSIE WANG</h1>
      <p className='subtext'>i'm a third year student at the university of toronto :)</p>
    </div>
  );
}

export default HeroSection;