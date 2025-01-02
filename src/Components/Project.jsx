import style from "./project.module.css";
import React, { useRef } from "react";

const Project = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={style.ProjectContainer}>
      <div className={style.projectBox}>
        <h3>Banking Management System</h3>
        <p>A comprehensive system for managing banking operations efficiently, with user-friendly interfaces and secure transaction handling.</p>
        <a
          href="https://github.com/mdanasec/BankingManagementSystemProject"
          target="_blank"
          rel="noopener noreferrer"
          className={style.githubButton}
        >
          Visit GitHub
        </a>
      </div>
      <div className={style.projectBox}>
        <h3>Portfolio</h3>
        <p>An elegant and responsive personal portfolio to showcase skills, projects, and achievements in a professional manner.</p>
        <a
          href="https://github.com/mdanasec/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className={style.githubButton}
        >
          Visit GitHub
        </a>
      </div>
      <div className={style.projectBox}>
        <h3>OTP Authentication</h3>
        <p>A secure OTP-based authentication system to enhance login security using Spring Boot and Twilio API integration.</p>
        <a
          href="https://github.com/mdanasec/echolink-otpauheticate"
          target="_blank"
          rel="noopener noreferrer"
          className={style.githubButton}
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
};

export default Project;
