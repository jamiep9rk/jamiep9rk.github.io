import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Dmade() {
  return (
    <article
      className="w-[100%] flex flex-col items-center rounded-[10px] p-[15px]"
      css={css`
        background: #fff;
      `}
    >
      <section className="flex flex-col items-center mb-[30px]">
        <h4 className="text-[35px] font-[700] mb-[10px]">DMADE</h4>
        <p className="text-[17px] text-[#9a9a9a]">
          2022.05 - 2022.11 (회사 서비스)
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

// : 웹포스터 제작 및 통계관리 플랫폼
// 로그인, 마이페이지 기능 구현
// Chart.js를 이용해 데이터 시각화 개선하여 유저의 경험 향상
