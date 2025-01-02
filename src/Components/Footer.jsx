import linkedin from "../Images/linkedin.jpg"
import fb from "../Images/fb.png"
import github from "../Images/github.png"
import style from "./footer.module.css"
import React from 'react';


const Footer = () => {
    const resumePdfUrl = "../Images/MD ANAS.pdf";
  
    return (
      <footer id={style.MainContainer}>
        <div className={style.Container}>
          {/* About Section */}
          <div className={style.section}>
            <h2>About</h2>
            <a href={resumePdfUrl} download>Download Resume</a>
            
          </div>
  
          {/* Links Section */}
          <div className={style.section}>
            <h2>Links</h2>
            <a href="https://github.com/mdanasec" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mdanasec/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
  
          {/* Skills Section */}
          <div className={style.section}>
            <h2>Languages</h2>
            <p>Core Java, HTML/CSS, JavaScript, SQL</p>
            <h2>Frameworks</h2>
            <p>Hibernate, Spring, Spring Boot, and React JS</p>
          </div>
  
          {/* Social Section */}
          <div className={style.social}>
            <h2>Follow Me</h2>
            <div className={style.icons}>
              <a href="https://www.linkedin.com/in/mdanasec/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/mdanasec" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className={style.git} />
              </a>
              <a href="https://www.facebook.com/mdanasec" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;