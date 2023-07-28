import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { Link } from "react-scroll";

function Header() {
  return (
    <article css={header}>
      <div></div>
      <div className="grid grid-cols-3 gap-[10px] text-center">
        <p>ABOUT</p>
        <p>CAREER</p>
        <p>SKILLS</p>
      </div>
      {/* <Link
        className="header-landing-link"
        to="landing-container"
        spy={true}
        smooth={true}
      >
        <nav className="home-button">@jamiep9rk</nav>
      </Link>
      <nav className="home-navigation-container">
        <Link
          className="header-about-link"
          to="about-container"
          spy={true}
          smooth={true}
        >
          <div className="navigation-about">ABOUT</div>
        </Link>
        <Link
          className="header-skills-link"
          to="skills-container"
          spy={true}
          smooth={true}
        >
          <div className="navigation-skills">SKILLS</div>
        </Link>
        <Link
          className="header-projects-link"
          to="projects-container"
          spy={true}
          smooth={true}
        >
          <div className="navigation-projects">PROJECTS</div>
        </Link>
      </nav> */}
    </article>
  );
}

export default Header;

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: white;
  font-size: 28px;
  font-weight: bold;
  z-index: 999;
  border-bottom: 5px solid #369acb;
`;

// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-pack: justify;
// -ms-flex-pack: justify;
// justify-content: space-between;
// -webkit-box-align: center;
// -ms-flex-align: center;
// align-items: center;
// height: 70px;
// position: -webkit-sticky;
// position: sticky;
// top: 0;
// background-color: white;
// font-size: 28px;
// font-weight: bold;
// z-index: 999;
// border-bottom: 5px solid #369acb;
