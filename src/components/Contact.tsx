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
                <a className="navigation-resume" href="https://terrific-cerise-671.notion.site/Park-Jeong-Hyun-5053e6758e2048b8849306074a728be9" target="_blank">
                    이력서 보러가기
                </a>
            </div>
        </div>
    );
}

export default Contact;
