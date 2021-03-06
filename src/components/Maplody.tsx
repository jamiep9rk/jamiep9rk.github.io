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
            <div className="project-white-container">
                <div className="project-name">Maplody</div>
                <div className="project-team">Front-end 2λͺ / Back-end 2λͺ</div>
                <div className="projects-term">2021.11 - 2021.11 (2μ£Ό)</div>
                <div className="project-info-container">
                    <div className="page-carousel">
                        <Slider {...settings}>
                            <img className="project-landing-image" src={maplody} alt="" />
                            <img className="project-landing-image" src={signup} alt="" />
                            <img className="project-landing-image" src={register} alt="" />
                            <img className="project-landing-image" src={withdrawal} alt="" />
                        </Slider>
                    </div>
                    <div className="project-details-container">
                        <nav className="details-title">π΅ μΆμ΅μ΄ μλ μμμ λ€μλ μ₯μμ ν¨κ» κΈ°λ‘νλ μ±, Maplody μλλ€</nav>
                        <li className="details-sentence">μνλ μ₯μμ μμκ³Ό μ¬μ°μ μ μ₯ν  μ μμ΄μ</li>
                        <li className="details-sentence">μ¬μ΄λλ°μμ λ΄κ° μ μ₯ν μμκ³Ό μ¬μ°μ λͺ¨μλ³Ό μ μμ΄μ</li>
                        <li className="details-sentence">κΈ°λ‘ν νμ μ§λμμ ν λμ λ³Ό μ μμ΄μ</li>
                        <li className="details-sentence">μ μ₯ν΄λμ μμμ μ νλΈ μμμΌλ‘ κ°μν  μ μμ΄μ</li>
                        <div className="details-title">βοΈ μ£Όμ κΈ°λ₯ κ΅¬ν</div>
                        <li className="details-sentence">νλ‘μ νΈ κΈ°ν λ° μ§ν μν© κ΄λ¦¬, νμλ€ κ° μν΅ κ΄λ¦¬</li>
                        <li className="details-sentence">Youtube APIλ₯Ό μ΄μ©ν΄ κ²μμ ν΅ν μ νλΈ λΉλμ€ λΆλ¬μ€κΈ° κ΅¬ν</li>
                        <li className="details-sentence">Google Maps APIλ₯Ό μ΄μ©ν μ§λ λ° μΈν¬ μλμ°, λ§μ»€ μ’ν κ΅¬ν</li>
                        <div className="project-stack-container">
                            <div className="stack-box">#React</div>
                            <div className="stack-box">#Javascript</div>
                            <div className="stack-box">#styled-component</div>
                            <div className="stack-box">#Youtube API</div>
                            <div className="stack-box">#Google Maps API</div>
                        </div>
                        <div className="project-link-container">
                            <a className="project-link" href="https://maplody.site" target="_blank">
                                <img className="project-home-icon" src={homeIcon} alt="ννμ΄μ§ λ°λ‘κ°κΈ°" />
                                <div className="project-link-text">ννμ΄μ§</div>
                            </a>
                            <a className="project-link" href="https://github.com/codestates/Maplody" target="_blank">
                                <img className="project-github-icon" src={githubIcon} alt="κΉν λ°λ‘κ°κΈ°" />
                                <div className="project-link-text">κΉν λ ν¬</div>
                            </a>
                            <a className="project-link" href="https://github.com/codestates/Maplody/projects/1#column-17308479" target="_blank">
                                <img className="project-retrospect-icon" src={diaryIcon} alt="νκ³  λ°λ‘κ°κΈ°" />
                                <div className="project-link-text">μμ νκ³ μΌμ§</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Maplody;
