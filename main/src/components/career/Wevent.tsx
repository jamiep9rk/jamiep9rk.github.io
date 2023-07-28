import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import Icons from "../common/icons";

export default function Wevent() {
  return (
    <article
      className="w-[100%] flex flex-col items-center rounded-[10px] p-[15px]"
      css={css`
        background: #fff;
      `}
    >
      <section className="flex flex-col items-center mb-[30px]">
        <h4 className="text-[35px] font-[700] mb-[10px]">WEVENT</h4>
        <p className="text-[17px] text-[#9a9a9a]">
          2022.11 - 2023.06 (회사 서비스)
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
        >
          <div>
            <p className="font-[600]">
              웹에서 세미나 및 컨퍼런스를 열수 있는 웨비나 플랫폼입니다.
            </p>
            <li>EDM 캔버스 제작 페이지 기능 구현</li>
            <li>관리자 페이지에서 사용자를 위한 테마 제작 페이지 기능 구현</li>
            <li>
              react-beautiful-dnd와 unsplash, tinyMCE 에디터를 사용해 사용자
              취향 반영
            </li>
            <li>
              사용자 클릭 영역에 따라 사용자의 편집 범위 표시 및 자율성 확대
            </li>
          </div>
          <div className="w-[100%] h-[1px] bg-[#9a9a9a] my-[10px]" />
          <div>
            {/* <Icons icon="check_icon" /> */}
            <p>URL</p>
          </div>
        </div>
      </section>
    </article>
  );
}

// : 웹에서 세미나 및 컨퍼런스를 열수 있는 웨비나 플랫폼
// EDM 캔버스 제작 페이지 기능 구현
// 관리자 페이지에서 사용자를 위한 테마 제작 페이지 기능 구현
// react-beautiful-dnd와 unsplash, tinyMCE 에디터를 사용해 사용자 취향 반영
// 사용자 클릭 영역에 따라 사용자의 편집 범위 표시 및 자율성 확대
