import React from "react";

function Header() {
    return (
        <header className="header-container">
            <nav className="home-button">HOME</nav>
            <div className="home-navigation-container">
                <nav className="navigation-about">ABOUT</nav>
                <nav className="navigation-skills">SKILLS</nav>
                <nav className="navigation-projects">PROJECTS</nav>
                <nav className="navigation-contact">CONTACT</nav>
            </div>
        </header>
    );
}

export default Header;
