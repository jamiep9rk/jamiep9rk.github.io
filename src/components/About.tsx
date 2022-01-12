import React from "react";
import profileImg from "../img/profile.jpg";

function About() {
    return (
        <div className="about-container">
            <nav className="welcome-container">
                <img className="profile-image" src={profileImg} alt="" />
                <div className="welcome-text-container">
                    <nav className="onboard-text">Welcome Onboard</nav>
                    <nav className="developer-text">프론트엔드 개발자 박정현 입니다</nav>
                </div>
            </nav>
            <nav className="myinfo-container">
                <nav className="myinfo-text-container">
                    <div className="profile-name">박정현 (PARK Jeong Hyun)</div>
                    <hr className="profile-bar" />
                    <div className="profile-info-email-container">
                        <i className="far fa-envelope" />
                        <nav className="profile-email-title">E-mail</nav>
                        <nav className="profile-email-text">jamiecareer96@gmail.com</nav>
                    </div>
                    <div className="profile-info-mobile-container">
                        <i className="fas fa-mobile-alt" />
                        <nav className="profile-mobile-title">Mobile</nav>
                        <nav className="profile-mobile-text">010-6301-7841</nav>
                    </div>
                    <div className="profile-info-github-container">
                        <i className="fab fa-github" />
                        <nav className="profile-github-title">Github</nav>
                        <nav className="profile-github-text">https://github.com/jamiep9rk</nav>
                    </div>
                </nav>
                <nav className="myinfo-resume-container">
                    <a href="img/프론트엔드_박정현_(Park_Jeong_Hyun).pdf" download="프론트엔드 박정현">
                        <button className="resume-download-button">이력서 다운로드</button>
                    </a>
                </nav>
            </nav>
        </div>
    );
}

export default About;
