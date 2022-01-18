import React from "react";
import profileImg from "../img/profile.jpg";

function Landing() {
    return (
        <div className="landing-container">
            <nav className="welcome-container">
                <img className="profile-image" src={profileImg} alt="" />
                <div className="welcome-text-container">
                    <nav className="onboard-text">Welcome Onboard</nav>
                    <nav className="developer-text">프론트엔드 개발자 박정현 입니다</nav>
                </div>
            </nav>
            <div className="scroll-container">
                <div className="scroll-text">scroll</div>
            </div>
        </div>
    );
}

export default Landing;
