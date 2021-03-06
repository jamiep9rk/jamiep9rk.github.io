import React from "react";
import { Link } from "react-scroll";

function Footer() {
    return (
        <footer className="footer-container">
            <nav className="footer-contact-container">
                <i className="far fa-hand-point-right" />
                <Link className="footer-contact-link" to="about-container" spy={true} smooth={true}>
                    <div className="footer-contact">Contact</div>
                </Link>
            </nav>
            <nav className="footer-title">@ 2022 Front-end developer, Jamie Park's portfolio</nav>
        </footer>
    );
}

export default Footer;
