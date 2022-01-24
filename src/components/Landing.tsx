import React from "react";
import profileImg from "../img/profile.jpg";

function Landing() {
    return (
        <section className="landing-container">
            <div className="welcome-container">
                <img className="profile-image" src={profileImg} alt="" />
                <div className="welcome-text-container">
                    <div className="onboard-text">Welcome Onboard ✈️</div>
                    <div className="developer-text">프론트엔드 개발자 박정현 입니다</div>
                </div>
            </div>
            <div className="scroll-container">
                <div className="main-scroll-icon">
                    <div className="main-scroll-icon-down" />
                </div>
                <div className="main-scroll-icon-text">Scroll</div>
            </div>
        </section>
    );
}

export default Landing;
