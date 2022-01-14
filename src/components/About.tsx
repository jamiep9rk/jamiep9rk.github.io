import React from "react";

function About() {
    return (
        <div className="about-container">
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
                    <a href="https://terrific-cerise-671.notion.site/Park-Jeong-Hyun-5053e6758e2048b8849306074a728be9" target="_blank">
                        <button className="resume-download-button">이력서 보기</button>
                    </a>
                </nav>
                <nav className="myinfo-description-container">
                    <div className="my-desciption">
                        많은 유저들이 사용할 수 있는 앱을 만들고 싶은 프론드엔드 개발자 박정현입니다.
                        <br />
                        여러 나라를 다니고 사람들을 만나면서 사람의 환경에 따라 웹 서비스 사용의 격차가 크고,
                        <br />
                        그에 따라서 사람들이 누릴 수 있는 혜택의 차이도 벌어진다는 느꼈습니다.
                        <br />
                        그래서 누구나 쉽고 편리하게 이용할 수 있는 웹 서비스를 만들 수 있는 개발자가 되고 싶습니다.
                    </div>
                </nav>
            </nav>
        </div>
    );
}

export default About;
