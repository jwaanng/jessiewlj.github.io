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
      greeting: "Welcome! I'm Jessie, a third year undergrad student at UofT interested in and studying cognitive science, computer science, and math (sometimes). I enjoy trying and cooking new foods, playing badminton, creating art, making ideas come to life with code, and sharing my life. Feel free to check out some of my projects and reach out to me!",
    },
    zh: {
      greeting: "欢迎！我是Jessie，目前是多伦多大学本科三年级的学生。我擅长认知科学，计算机科学和数学等相关领域的学习，同时对美食制作，艺术创作，编程和打羽毛球非常感兴趣。我很乐意向你分享我的生活，欢迎关注我的作品！",
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="about-section">
      <div className="about-text">
        <div className="image-area">
          <img src='./Gallery/self.jpg' alt='Jessie' />
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