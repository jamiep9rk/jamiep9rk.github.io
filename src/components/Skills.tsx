import React from "react";
import aws from "../img/skills/aws-icon.png";
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

function Skills() {
    return (
        <div className="skills-container">
            <nav className="skills-title">Skills</nav>
            <hr className="skills-bar" />
            <nav className="skills-box-container">
                <div className="skills-language-title">Language</div>
                <div className="skills-container">
                    <img className="skills-image" src={javascript} alt="" />
                    <nav className="skills-text">Javascript</nav>
                </div>
                <div className="skills-container">
                    <img className="skills-image" src={css} alt="" />
                    <nav className="skills-text">CSS</nav>
                </div>
                <div className="skills-container">
                    <img className="skills-image" src={html} alt="" />
                    <nav className="skills-text">HTML</nav>
                </div>
            </nav>
        </div>
    );
}

export default Skills;
