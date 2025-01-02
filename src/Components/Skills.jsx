import style from "./skills.module.css";
import React from 'react';

const Skills = () => {
    return (
        <section id={style.SC}>
            <div className={style.skillBox}>
                <h3>Core Java</h3>
            </div>
            <div className={style.skillBox}>
                <h3>SQL</h3>
                {/* <p>(Structure Query Language)</p> */}
            </div>
            <div className={style.skillBox}>
                <h3>JDBC</h3>
            </div>
            <div className={style.skillBox}>
                <h3>Hibernate</h3>
            </div>
            <div className={style.skillBox}>
                <h3>Spring Framework</h3>
            </div>
            <div className={style.skillBox}>
                <h3>Spring Boot</h3>
            </div>
            <div className={style.skillBox}>
                <h3>React.js</h3>
            </div>
            <div className={style.skillBox}>
                <h3>JavaScript</h3>
            </div>
        
            <div className={style.skillBox}>
                <h3>HTML</h3>
            </div>
            <div className={style.skillBox}>
                <h3>CSS</h3>
            </div>
            <div className={style.skillBox}>
                <h3>Postman</h3>
            </div>
            <div className={style.skillBox}>
                <h3>Github</h3>
            </div>
        </section>
    )
}

export default Skills;
