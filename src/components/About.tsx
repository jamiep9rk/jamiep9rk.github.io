import React from "react";
import myinfoProfile from "../img/myinfoProfile.png";

function About() {
    return (
        <section className="about-container">
            <nav className="myinfo-container">
                <nav className="myinfo-text-container">
                    <img className="myinfo-profile-image" src={myinfoProfile} alt="" />
                    <div className="profile-name">박정현 (PARK Jeong Hyun)</div>
                    <hr className="profile-bar" />
                    <div className="profile-info-email-container">
                        <i className="far fa-envelope" />
                        <nav className="profile-email-title">E-mail</nav>
                        <a className="navigation-email" href="mailto:jamiecareer96@gmail.com">
                            <nav className="profile-email-text">jamiecareer96@gmail.com</nav>
                        </a>
                    </div>
                    <div className="profile-info-mobile-container">
                        <i className="fas fa-mobile-alt" />
                        <nav className="profile-mobile-title">Mobile</nav>
                        <nav className="profile-mobile-text">010-6301-7841</nav>
                    </div>
                    <div className="profile-info-github-container">
                        <i className="fab fa-github" />
                        <nav className="profile-github-title">Github</nav>
                        <a className="profile-github-link" href="https://github.com/jamiep9rk" target="_blank">
                            <div className="profile-github-text">https://github.com/jamiep9rk</div>
                        </a>
                    </div>
                </nav>
                <div className="about-divide-bar" />
                <nav className="myinfo-description-container">
                    <div className="my-desciption">
                        "많은 유저들이 사용할 수 있는 앱"을 만들고 싶은
                        <br />
                        프론드엔드 개발자 박정현입니다.
                        <br />
                        여러 나라를 다니고 사람들을 만나면서
                        <br />
                        사람의 환경에 따라 웹 서비스 사용의 격차가 크고,
                        <br />
                        그에 따라서 사람들이 누릴 수 있는
                        <br />
                        혜택의 차이도 벌어진다는 느꼈습니다.
                        <br />
                        그래서 누구나 쉽고 편리하게 이용할 수 있는
                        <br />웹 서비스를 만들 수 있는 개발자가 되고 싶습니다.
                    </div>
                    <nav className="myinfo-resume-container">
                        <a href="https://terrific-cerise-671.notion.site/Park-Jeong-Hyun-5053e6758e2048b8849306074a728be9" target="_blank">
                            <button className="resume-download-button">이력서 보기</button>
                        </a>
                    </nav>
                </nav>
            </nav>
        </section>
    );
}

export default About;
