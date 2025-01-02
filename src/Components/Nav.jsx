import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";
import style from "./nav.module.css";
import resumePdf from "../Images/MD ANAS.pdf";
const Nav = () => {
    const navRef = useRef();
    // const resumePdfUrl = "..\\Images\\MD ANAS.pdf";

    const downloadResume = () => {
        const anchor = document.createElement("a");
        anchor.href = resumePdf;
        anchor.download = "MD_ANAS_Resume.pdf"; // The name for the downloaded file
        anchor.click();
      };

    useEffect(() => {
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        };

        const links = navRef.current.querySelectorAll("a[href^='#']");
        links.forEach((link) => {
            link.addEventListener("click", handleSmoothScroll);
        });

        return () => {
            // Remove event listeners when the component unmounts
            links.forEach((link) => {
                link.removeEventListener("click", handleSmoothScroll);
            });
        };
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle(style.responsive_Nav);
    };

 

    return (
        <header id={style.head}>
            <nav className={style.Nav} ref={navRef}>
                <div><a href="#HomeContainer">Home</a></div>
                <div><a href="#ABOUTMESECTION">About</a></div>
                <div><a href="#" onClick={downloadResume}>Resume</a></div>
                <div><a href="#SkillsContainer">Skills</a></div>
                <div><a href="#PC">Project</a></div>
                <div><a href="https://www.linkedin.com/in/mdanasec/">LinkedIn</a></div>
                <div><a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJNvvsPPqZJwSkdCFmBhwbdjJQSDvDskXqqxnZNMRLQfmRcJPsLtZZNLwLJXqtrJNbqKkkL">Contact Us</a></div>

                <button className={`${style.btnmenu} ${style.btnmenuclose}`} onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div><a href="#" className={style.MA}>Md Anas</a></div>

            <button className={style.b} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Nav;
