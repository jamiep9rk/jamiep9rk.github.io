import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Wevent from "src/components/project/Wevent";
import Dmade from "src/components/project/Dmade";
import Dokdo from "src/components/project/Dokdo";

export default function Project() {
  return (
    <article className="project-container" css={maincontainer}>
      <h2 className="text-[45px] text-[#fff] font-[700] mb-[10px]">PROJECT</h2>
      <div className="w-[200px] h-[1px] bg-[#fff] mb-[40px]" />
      <div className="w-[100%] grid gap-[70px]">
        <Wevent />
        <Dmade />
        <Dokdo />
      </div>
    </article>
  );
}

const maincontainer = css`
  background-color: #369acb;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 100px;
`;
