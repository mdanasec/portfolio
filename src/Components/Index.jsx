import React from "react"
import style from "./home.module.css"
import Intro from "./Intro"
import Nav from "./Nav"
import Skills from "./Skills"
import Project from "./Project"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Footer from "./Footer"
const Index = () => {
  return (
    <section className={style.main} id="HomeContainer">
      <div id={style.head}>
        <div className={style.nav}><Nav /></div>
      </div>
      <section className={style.IBContainer}>
        <article className={style.container1}><Intro /></article>
      </section>
      <div className={style.Sk}><h1>Technical Skills</h1></div>

      <div className={style.SkillsContainer} id="SkillsContainer"><Skills /></div>
      <div className={style.AM} id="ABOUTMESECTION"><AboutMe /></div>

      <div className={style.PText}><h1>Project</h1></div>
      <div className={style.ProjectContainer} id="PC"><Project /></div>

      <div className={style.PText}><h1>Education</h1></div>
      <div className={style.EDContainer}><Education /></div>




      <div className={style.FooterContainer}><Footer /></div>
      <div>

      </div>

    </section>
  )
}
export default Index