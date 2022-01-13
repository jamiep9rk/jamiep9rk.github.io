import React from "react";
import { Link } from "react-scroll";

function Header() {
    return (
        <header className="header-container">
            <nav className="home-button">@jamiep9rk</nav>
            <div className="home-navigation-container">
                <Link to="about-container" spy={true} smooth={true}>
                    <nav className="navigation-about">ABOUT</nav>
                </Link>
                <Link to="skills-container" spy={true} smooth={true}>
                    <nav className="navigation-skills">SKILLS</nav>
                </Link>
                <Link to="projects-container" spy={true} smooth={true}>
                    <nav className="navigation-projects">PROJECTS</nav>
                </Link>
                <Link to="contact-container" spy={true} smooth={true}>
                    <nav className="navigation-contact">CONTACT</nav>
                </Link>
            </div>
        </header>
    );
}

export default Header;
