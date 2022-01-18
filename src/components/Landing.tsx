import React from "react";
import profileImg from "../img/profile.jpg";

function Landing() {
    return (
        <div className="landing-container">
            <nav className="welcome-container">
                <img className="profile-image" src={profileImg} alt="" />
                <div className="welcome-text-container">
                    <nav className="onboard-text">Welcome Onboard ✈️</nav>
                    <nav className="developer-text">프론트엔드 개발자 박정현 입니다</nav>
                </div>
            </nav>
            <nav className="scroll-container">
                <a className="scroll-link" href="#content">
                    <svg className="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130" preserveAspectRatio="xMidYMid meet">
                        <g fill="none" fill-rule="evenodd">
                            <rect width="70" height="118" x="1.5" y="1.5" stroke="black" stroke-width="3" rx="36" />
                            <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="black" />
                        </g>
                    </svg>
                </a>
                <div className="scroll-text">scroll</div>
            </nav>
        </div>
    );
}

export default Landing;
