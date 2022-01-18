import React from "react";
import mealtomeal from "../img/meal-to-meal-landing.png";
import homeIcon from "../img/skills/home-icon.png";
import githubIcon from "../img/skills/github-icon.png";
import diaryIcon from "../img/skills/diary-icon.png";
import login from "../img/projects/Login.gif";
import phone from "../img/projects/PhoneVerification.gif";
import reviewUpload from "../img/projects/ReviewUpload.gif";
import searchBar from "../img/projects/SearchBar.gif";
import signup from "../img/projects/SignUp.gif";
import storeInfo from "../img/projects/StoreInfo.gif";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function Mealtomeal() {
    return (
        <div className="projects-container">
            <nav className="projects-title">Projects</nav>
            <hr className="projects-bar" />
            <nav className="project-white-container">
                <div className="project-name">Meal-To-Meal</div>
                <div className="project-team">Front-end 2명 / Back-end 2명</div>
                <div className="projects-term">2021.11 - 2021.12 (4주)</div>
                <nav className="project-info-container">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={login} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={phone} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={reviewUpload} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={searchBar} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={signup} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={storeInfo} alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    {/* <img className="project-landing-image" src={mealtomeal} alt="" /> */}
                    <div className="project-details-container">
                        <nav className="details-title">🍔 내가 먹은 맛있는 한 끼를 다른 사람에게 기부할 수 있는 플랫폼 입니다</nav>
                        <ul>누군가가 한 끼를 먹을 수 있도록 기부할 수 있어요</ul>
                        <ul>누구든지 다른 사람이 기부한 음식으로 끼니를 챙길 수 있어요</ul>
                        <ul>음식점 사장님들은 손님들이 남긴 리뷰로 맛집임을 증명 할 수 있어요</ul>
                        <nav className="details-title">✏️ 주요 기능 구현</nav>
                        <ul>프로젝트 SR 기획 및 진행 상황 관리, 팀원들 간 소통 관리</ul>
                        <ul>Google Maps API를 이용한 지도 및 인포 윈도우, 검색창 구현</ul>
                        <ul>S3를 활용한 이미지 업로드 구현</ul>
                        <ul>카카오 로그인 API를 이용한 토큰 기반 소셜 로그인 구현</ul>
                        <nav className="project-stack-container">
                            <div className="stack-box">#React S3</div>
                            <div className="stack-box">#Sass</div>
                            <div className="stack-box">#Javascript</div>
                            <div className="stack-box">#React</div>
                            <div className="stack-box">#Kakao Login API</div>
                            <div className="stack-box">#Google Maps API</div>
                        </nav>
                        <nav className="project-link-container">
                            <a href="https://www.mealtomeal.shop/" target="_blank">
                                <img className="project-home-icon" src={homeIcon} alt="홈페이지 바로가기" />
                            </a>
                            <a href="https://github.com/codestates/Meal-To-Meal" target="_blank">
                                <img className="project-github-icon" src={githubIcon} alt="깃헙 바로가기" />
                            </a>
                            <a href="https://github.com/codestates/Meal-To-Meal/projects/2#column-16956055" target="_blank">
                                <img className="project-retrospect-icon" src={diaryIcon} alt="회고 바로가기" />
                            </a>
                        </nav>
                    </div>
                </nav>
            </nav>
        </div>
    );
}

export default Mealtomeal;
