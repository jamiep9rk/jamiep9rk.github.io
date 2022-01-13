import React from "react";

function Contact() {
    return (
        <div className="contact-container">
            <nav className="contact-title">CONTACT</nav>
            <div className="contact-navigation-container">
                <nav className="contact-email-container">
                    <i className="far fa-envelope" />
                    <div className="navigation-email">jamiecareer96@gmail.com</div>
                </nav>
                <nav className="contact-number-container">
                    <i className="fas fa-mobile-alt" />
                    <div className="navigation-number">010-6301-7841</div>
                </nav>
                <nav className="contact-github-container">
                    <i className="fab fa-github" />
                    <div className="navigation-github">Github 링크</div>
                </nav>
                <nav className="contact-resume-container">
                    <i className="far fa-file" />
                    <div className="navigation-resume">이력서 다운로드</div>
                </nav>
            </div>
        </div>
    );
}

export default Contact;
