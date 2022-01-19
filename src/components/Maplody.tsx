import React from "react";
import maplody from "../img/maplody-landing.png";
import homeIcon from "../img/skills/home-icon.png";
import githubIcon from "../img/skills/github-icon.png";
import diaryIcon from "../img/skills/diary-icon.png";
import signup from "../img/projects/maplody-signup.gif";
import register from "../img/projects/maplody-register.gif";
import withdrawal from "../img/projects/maplody-withdrawal.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Maplody() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="projects-container">
            <nav className="project-white-container">
                <div className="project-name">Maplody</div>
                <div className="project-team">Front-end 2명 / Back-end 2명</div>
                <div className="projects-term">2021.11 - 2021.11 (2주)</div>
                <nav className="project-info-container">
                    <div className="page-carousel">
                        <Slider {...settings}>
                            <img className="project-landing-image" src={maplody} alt="" />
                            <img className="project-landing-image" src={signup} alt="" />
                            <img className="project-landing-image" src={register} alt="" />
                            <img className="project-landing-image" src={withdrawal} alt="" />
                        </Slider>
                    </div>
                    <div className="project-details-container">
                        <nav className="details-title">🎵 추억이 있는 음악을 들었던 장소와 함께 기록하는 앱, Maplody 입니다</nav>
                        <li className="details-sentence">원하는 장소에 음악과 사연을 저장할 수 있어요</li>
                        <li className="details-sentence">사이드바에서 내가 저장한 음악과 사연을 모아볼 수 있어요</li>
                        <li className="details-sentence">기록한 핀을 지도에서 한 눈에 볼 수 있어요</li>
                        <li className="details-sentence">저장해놓은 음악을 유튜브 영상으로 감상할 수 있어요</li>
                        <nav className="details-title">✏️ 주요 기능 구현</nav>
                        <li className="details-sentence">프로젝트 기획 및 진행 상황 관리, 팀원들 간 소통 관리</li>
                        <li className="details-sentence">Youtube API를 이용해 검색을 통한 유튜브 비디오 불러오기 구현</li>
                        <li className="details-sentence">Google Maps API를 이용한 지도 및 인포 윈도우, 마커 좌표 구현</li>
                        <nav className="project-stack-container">
                            <div className="stack-box">#React</div>
                            <div className="stack-box">#Javascript</div>
                            <div className="stack-box">#styled-component</div>
                            <div className="stack-box">#Youtube API</div>
                            <div className="stack-box">#Google Maps API</div>
                        </nav>
                        <nav className="project-link-container">
                            <a className="project-link" href="https://maplody.site" target="_blank">
                                <img className="project-home-icon" src={homeIcon} alt="홈페이지 바로가기" />
                                <div className="project-link-text">홈페이지</div>
                            </a>
                            <a className="project-link" href="https://github.com/codestates/Maplody" target="_blank">
                                <img className="project-github-icon" src={githubIcon} alt="깃헙 바로가기" />
                                <div className="project-link-text">깃헙 레포</div>
                            </a>
                            <a className="project-link" href="https://github.com/codestates/Maplody/projects/1#column-17308479" target="_blank">
                                <img className="project-retrospect-icon" src={diaryIcon} alt="회고 바로가기" />
                                <div className="project-link-text">작업 회고일지</div>
                            </a>
                        </nav>
                    </div>
                </nav>
            </nav>
        </section>
    );
}

export default Maplody;
