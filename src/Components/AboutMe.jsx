import style from "./aboutme.module.css";
import anas from "../Images/anas.png";
import resumePdf from "../Images/MD ANAS.pdf"; // Import the PDF file

const AboutMe = () => {
  const downloadResume = () => {
    const anchor = document.createElement("a");
    anchor.href = resumePdf;
    anchor.download = "MD_ANAS_Resume.pdf"; // The name for the downloaded file
    anchor.click();
  };

  return (
    <section className={style.IntroBodyContainer} id={style.MainContainer}>
      <section id={style.AMContainer}>
        <article className={style.AMD}>
          <div className={style.AbMDetails}>
            <div className={style.about}>
              <h2>About Me</h2>
              <p>
                I am a passionate and motivated Java Full Stack Developer with a strong foundation in both frontend and backend development. I am eager to contribute to innovative projects, leverage my skills, and continue to grow in a dynamic work environment.
              </p>
              <p>
                My core skills include Core Java,SQL, Hibernate, Spring Framework, Spring Boot, React.js, HTML, CSS, and JavaScript. I am focused on creating efficient, user-friendly applications and always look forward to learning new technologies to enhance my capabilities.
              </p>
              <button onClick={downloadResume} id="d" className={style.btn}>DOWNLOAD CV</button>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default AboutMe;
