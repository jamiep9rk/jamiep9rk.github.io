import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Wevent from "src/components/career/Wevent";
import Dmade from "src/components/career/Dmade";
import Dokdo from "src/components/career/Dokdo";

export default function Career() {
  return (
    <article css={maincontainer}>
      <h2 className="text-[45px] text-[#fff] font-[700] mb-[20px]">CAREER</h2>
      <div className="w-[100%] grid gap-[30px]">
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
  padding: 60px 40px;
`;
