import React, { useState } from "react";
import "./AboutMe.css";

// const AboutMe = (props) => (
//   <div className="about-section">
//     <div className="about-text" >
//       <div className="image-area">
//         <img src='./RandomPics/professional.JPG' alt='wassupdawg' />
//       </div>
//       <div className="about-title-n-text">
//         <h1>About Me</h1>
//         <p>
//           Welcome! I'm Jessie, a second year undergrad student at UofT interested in and studying cognitive science, computer science, and math (sometimes).
//           I enjoy trying and cooking new foods, playing badminton, doing art, creating things with code, and sharing my life. Feel free to check out some of my projects :)
//         </p>
//       </div>
//     </div>
//   </div>
// );
// export default AboutMe;

const AboutMe = () => {
  const [language, setLanguage] = useState('en');

  const text = {
    en: {
      greeting: "Welcome! I'm Jessie, a second year undergrad student at UofT interested in and studying cognitive science, computer science, and math (sometimes). I enjoy trying and cooking new foods, playing badminton, creating art, making ideas come to life with code, and sharing my life. Feel free to check out some of my projects or reach out to me!",
    },
    zh: {
      greeting: "欢迎！我是Jessie,一名在多伦多大学的二年级本科学生，我对认知科学，计算机科学，和数学感兴趣。我享受尝试并制作新的食物，打羽毛球，创作艺术，用代码创造新事物， 和分享我的生活。有空可以来研究研究我的作品😊",
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="about-section">
      <div className="about-text">
        <div className="image-area">
          <img src='./RandomPics/professional.JPG' alt='Jessie' />
        </div>
        <div className="about-title-n-text">
          <h1>About Me</h1>
          <p>{text[language].greeting}</p>
          <button onClick={toggleLanguage}>
            {language === 'en' ? '中文' : 'ENG'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;