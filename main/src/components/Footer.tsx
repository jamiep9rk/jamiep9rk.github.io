import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { Link } from "react-scroll";

function Footer() {
  return (
    <footer css={maincontainer}>
      <p className="footer-title">@2023 Jamie Park. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

const maincontainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  color: #fff;
  font-size: 17px;
  height: 180px;
`;
