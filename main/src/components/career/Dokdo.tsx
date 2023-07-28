import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Dokdo() {
  return (
    <article
      className="w-[100%] flex flex-col items-center rounded-[10px] p-[15px]"
      css={css`
        background: #fff;
      `}
    >
      <section className="flex flex-col items-center mb-[30px]">
        <h4 className="text-[35px] font-[700] mb-[10px]">DOKDO</h4>
        <p className="text-[17px] text-[#9a9a9a]">
          2022.06 - 2022.11 (회사 서비스)
        </p>
      </section>
      <section className="w-[100%] flex">
        <div
          className="w-[50%]"
          css={css`
            border: 1px solid blue;
          `}
        ></div>
        <div
          className="w-[50%]"
          css={css`
            border: 1px solid red;
          `}
        ></div>
      </section>
    </article>
  );
}

// : 동북아역사재단 독도체험관 웹페이지
// 독도 체험관 관리자 웹페이지 게시판 CRUD 기능 구현
