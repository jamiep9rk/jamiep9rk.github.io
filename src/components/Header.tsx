import React from "react";
import { Link } from "react-scroll";

function Header() {
    return (
        <header className="header-container">
            <Link className="header-landing-link" to="landing-container" spy={true} smooth={true}>
                <nav className="home-button">@jamiep9rk</nav>
            </Link>
            <nav className="home-navigation-container">
                <Link className="header-about-link" to="about-container" spy={true} smooth={true}>
                    <div className="navigation-about">ABOUT</div>
                </Link>
                <Link className="header-skills-link" to="skills-container" spy={true} smooth={true}>
                    <div className="navigation-skills">SKILLS</div>
                </Link>
                <Link className="header-projects-link" to="projects-container" spy={true} smooth={true}>
                    <div className="navigation-projects">PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
