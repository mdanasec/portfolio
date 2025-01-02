import style from "./education.module.css";
import React from "react";

const Education = () => {
  return (
    <section id={style.EducationContainer}>
      <div className={style.educationBox}>
        <h3>Bachelor of Technology (B.Tech)</h3>
        <p>Electronics and Communication Engineering</p>
        <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya, 2023</p>
        <p>CGPA: 8.8</p>
      </div>
      <div className={style.educationBox}>
        <h3>Diploma  </h3>
        <p>Electrical Engineering</p>
        <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya, 2020</p>
        <p>CGPA: 7.2%</p>
      </div>
      <div className={style.educationBox}>
        <h3>High School</h3>
        <p>State Subsidized High School, 2017</p>
        <p>Percentage: 49%</p>
      </div>
    </section>
  );
};

export default Education;
