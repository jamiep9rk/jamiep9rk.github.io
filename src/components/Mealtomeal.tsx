import React from "react";
import homeIcon from "../img/skills/home-icon.png";
import githubIcon from "../img/skills/github-icon.png";
import diaryIcon from "../img/skills/diary-icon.png";
import login from "../img/projects/Login.gif";
import reviewUpload from "../img/projects/ReviewUpload.gif";
import searchBar from "../img/projects/SearchBar.gif";
import signup from "../img/projects/SignUp.gif";
import storeInfo from "../img/projects/StoreInfo.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Mealtomeal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="projects-container">
            <nav className="projects-title">Projects</nav>
            <hr className="projects-bar" />
            <div className="project-white-container">
                <div className="project-name">Meal-To-Meal</div>
                <div className="project-team">Front-end 2๋ช / Back-end 2๋ช</div>
                <div className="projects-term">2021.11 - 2021.12 (4์ฃผ)</div>
                <div className="project-info-container">
                    <div className="page-carousel">
                        <Slider {...settings}>
                            <img className="project-landing-image" src={login} alt="" />

                            <img className="project-landing-image" src={reviewUpload} alt="" />

                            <img className="project-landing-image" src={searchBar} alt="" />

                            <img className="project-landing-image" src={signup} alt="" />

                            <img className="project-landing-image" src={storeInfo} alt="" />
                        </Slider>
                    </div>
                    <div className="project-details-container">
                        <nav className="details-title">๐ ๋ด๊ฐ ๋จน์ ๋ง์๋ ํ ๋ผ๋ฅผ ๋ค๋ฅธ ์ฌ๋์๊ฒ ๊ธฐ๋ถํ? ์ ์๋ ํ๋ซํผ ์๋๋ค</nav>
                        <li className="details-sentence">๋๊ตฐ๊ฐ๊ฐ ํ ๋ผ๋ฅผ ๋จน์ ์ ์๋๋ก ๊ธฐ๋ถํ? ์ ์์ด์</li>
                        <li className="details-sentence">๋๊ตฌ๋?์ง ๋ค๋ฅธ ์ฌ๋์ด ๊ธฐ๋ถํ ์์์ผ๋ก ๋ผ๋๋ฅผ ์ฑ๊ธธ ์ ์์ด์</li>
                        <li className="details-sentence">์์์? ์ฌ์ฅ๋๋ค์ ์๋๋ค์ด ๋จ๊ธด ๋ฆฌ๋ทฐ๋ก ๋ง์ง์์ ์ฆ๋ช ํ? ์ ์์ด์</li>
                        <nav className="details-title">โ๏ธ ์ฃผ์ ๊ธฐ๋ฅ ๊ตฌํ</nav>
                        <li className="details-sentence">ํ๋ก์?ํธ SR ๊ธฐํ ๋ฐ ์งํ ์ํฉ ๊ด๋ฆฌ, ํ์๋ค ๊ฐ ์ํต ๊ด๋ฆฌ</li>
                        <li className="details-sentence">Google Maps API๋ฅผ ์ด์ฉํ ์ง๋ ๋ฐ ์ธํฌ ์๋์ฐ, ๊ฒ์์ฐฝ ๊ตฌํ</li>
                        <li className="details-sentence">S3๋ฅผ ํ์ฉํ ์ด๋ฏธ์ง ์๋ก๋ ๊ตฌํ</li>
                        <li className="details-sentence">์นด์นด์ค ๋ก๊ทธ์ธ API๋ฅผ ์ด์ฉํ ํ?ํฐ ๊ธฐ๋ฐ ์์ ๋ก๊ทธ์ธ ๊ตฌํ</li>
                        <div className="project-stack-container">
                            <div className="stack-box">#React S3</div>
                            <div className="stack-box">#Sass</div>
                            <div className="stack-box">#Javascript</div>
                            <div className="stack-box">#React</div>
                            <div className="stack-box">#Kakao Login API</div>
                            <div className="stack-box">#Google Maps API</div>
                        </div>
                        <div className="project-link-container">
                            <a className="project-link" href="https://www.mealtomeal.shop/" target="_blank">
                                <img className="project-home-icon" src={homeIcon} alt="ํํ์ด์ง ๋ฐ๋ก๊ฐ๊ธฐ" />
                                <div className="project-link-text">ํํ์ด์ง</div>
                            </a>
                            <a className="project-link" href="https://github.com/codestates/Meal-To-Meal" target="_blank">
                                <img className="project-github-icon" src={githubIcon} alt="๊นํ ๋ฐ๋ก๊ฐ๊ธฐ" />
                                <div className="project-link-text">๊นํ ๋?ํฌ</div>
                            </a>
                            <a className="project-link" href="https://github.com/codestates/Meal-To-Meal/projects/2#column-16956055" target="_blank">
                                <img className="project-retrospect-icon" src={diaryIcon} alt="ํ๊ณ? ๋ฐ๋ก๊ฐ๊ธฐ" />
                                <div className="project-link-text">์์ ํ๊ณ?์ผ์ง</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mealtomeal;
