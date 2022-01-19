import React from "react";
import aws from "../img/skills/aws-icon.jpeg";
import css from "../img/skills/css-icon.png";
import express from "../img/skills/express-icon.png";
import git from "../img/skills/git-icon.png";
import html from "../img/skills/html-icon.png";
import javascript from "../img/skills/javascript-icon.png";
import mysql from "../img/skills/mysql-icon.png";
import nodejs from "../img/skills/nodejs-icon.png";
import notion from "../img/skills/notion-icon.png";
import react from "../img/skills/react-icon.png";
import sass from "../img/skills/sass-icon.png";
import styledcomponent from "../img/skills/styledcomponent-icon.png";
import typescript from "../img/skills/typescript-icon.png";
import vue from "../img/skills/vue-icon.png";
import github from "../img/skills/github-icon.png";

function Skills() {
    return (
        <section className="skills-container">
            <nav className="skills-title">Skills</nav>
            <hr className="skills-bar" />
            <nav className="skills-type-container">
                <div className="skills-title-container">
                    <div className="skills-language-title">Language</div>
                </div>
                <nav className="skills-box-container">
                    <div className="skills-stack-container">
                        <img className="stack-image" src={javascript} alt="" />
                        <nav className="stack-text">Javascript</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={css} alt="" />
                        <nav className="stack-text">CSS</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={html} alt="" />
                        <nav className="stack-text">HTML</nav>
                    </div>
                </nav>
            </nav>
            <nav className="skills-type-container">
                <div className="skills-title-container">
                    <div className="skills-language-title">Framework & Library</div>
                </div>
                <nav className="skills-box-container">
                    <div className="skills-stack-container">
                        <img className="stack-image" src={nodejs} alt="" />
                        <nav className="stack-text">Node.js</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={express} alt="" />
                        <nav className="stack-text">Express</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={react} alt="" />
                        <nav className="stack-text">React</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={sass} alt="" />
                        <nav className="stack-text">Sass(SCSS)</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={styledcomponent} alt="" />
                        <nav className="stack-text">styled-component</nav>
                    </div>
                </nav>
            </nav>
            <nav className="skills-type-container">
                <div className="skills-title-container">
                    <div className="skills-language-title">Database</div>
                </div>
                <nav className="skills-box-container">
                    <div className="skills-stack-container">
                        <img className="stack-image" src={mysql} alt="" />
                        <nav className="stack-text">MySQL</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={aws} alt="" />
                        <nav className="stack-text">AWS</nav>
                    </div>
                </nav>
            </nav>
            <nav className="skills-type-container">
                <div className="skills-title-container">
                    <div className="skills-language-title">Tools</div>
                </div>
                <nav className="skills-box-container">
                    <div className="skills-stack-container">
                        <img className="stack-image" src={git} alt="" />
                        <nav className="stack-text">Git</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={notion} alt="" />
                        <nav className="stack-text">Notion</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={github} alt="" />
                        <nav className="stack-text">Github</nav>
                    </div>
                </nav>
            </nav>
            <nav className="skills-type-container">
                <div className="skills-title-container">
                    <div className="skills-language-title">Learning</div>
                </div>
                <nav className="skills-box-container">
                    <div className="skills-stack-container">
                        <img className="stack-image" src={typescript} alt="" />
                        <nav className="stack-text">Typescript</nav>
                    </div>
                    <div className="skills-stack-container">
                        <img className="stack-image" src={vue} alt="" />
                        <nav className="stack-text">Vue</nav>
                    </div>
                </nav>
            </nav>
        </section>
    );
}

export default Skills;
