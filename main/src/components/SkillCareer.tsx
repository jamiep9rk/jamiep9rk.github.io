import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Skills from "./skillcareer/Skills";
import Career from "./skillcareer/Career";

export default function SkillCareer() {
  return (
    <article className="skill-container" css={maincontainer}>
      <Skills />
      <Career />
    </article>
  );
}

const maincontainer = css`
  background-color: #0dcf82;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 70px 100px 80px 100px;
`;
