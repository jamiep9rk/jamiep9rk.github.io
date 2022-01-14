import React from "react";

function Contact() {
    return (
        <div className="contact-container">
            <nav className="contact-title">CONTACT</nav>
            <div className="contact-navigation-container">
                <a className="navigation-email" href="mailto:jamiecareer96@gmail.com">
                    메일 보내기
                </a>
                <div className="navigation-number">010-6301-7841</div>
                <a className="navigation-github" href="https://github.com/jamiep9rk" target="_blank">
                    Github 방문하기
                </a>
                <div className="navigation-resume">이력서 다운로드</div>
            </div>
        </div>
    );
}

export default Contact;
