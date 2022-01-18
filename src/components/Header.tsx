import React from "react";
import { Link } from "react-scroll";

function Header() {
    return (
        <header className="header-container">
            <Link className="header-landing-link" to="landing-container" spy={true} smooth={true}>
                <nav className="home-button">@jamiep9rk</nav>
            </Link>
            <div className="home-navigation-container">
                <Link className="header-about-link" to="about-container" spy={true} smooth={true}>
                    <nav className="navigation-about">ABOUT</nav>
                </Link>
                <Link className="header-skills-link" to="skills-container" spy={true} smooth={true}>
                    <nav className="navigation-skills">SKILLS</nav>
                </Link>
                <Link className="header-projects-link" to="projects-container" spy={true} smooth={true}>
                    <nav className="navigation-projects">PROJECTS</nav>
                </Link>
                {/* <Link to="contact-container" spy={true} smooth={true}>
                    <nav className="navigation-contact">CONTACT</nav>
                </Link> */}
            </div>
        </header>
    );
}

export default Header;
