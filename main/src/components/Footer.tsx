import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { Link } from "react-scroll";

function Footer() {
  return (
    <footer css={maincontainer}>
      {/* <nav className="footer-contact-container">
        <i className="far fa-hand-point-right" />
        <Link
          className="footer-contact-link"
          to="about-container"
          spy={true}
          smooth={true}
        >
          <div className="footer-contact">Contact</div>
        </Link>
      </nav> */}
      <p className="footer-title">@ 2023 Front-end developer, Jamie Park</p>
    </footer>
  );
}

export default Footer;

const maincontainer = css`
  display: flex;
  align-items: center;
  background: #919191;
  font-size: 17px;
  height: 180px;
`;
