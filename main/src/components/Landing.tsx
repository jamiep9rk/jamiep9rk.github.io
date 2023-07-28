import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import landing_bg from "./common/icons/icon/landing_bg.jpg";

function Landing() {
  return (
    <article css={maincontainer}>
      <div className="w-[100%] flex flex-col items-center p-[140px]">
        <h1 className="text-[45px] text-[#fff] font-[600]">- 박정현 -</h1>
        <h1 className="text-[45px] text-[#fff] font-[600]">
          프론트엔드 개발자 포트폴리오
        </h1>
        <div
          className="w-[50px] h-[2px] my-[20px]"
          css={css`
            background: #369acb;
          `}
        />
        <p className="text-center text-[#fff] text-[20px] leading-[35px] mb-[30px]">
          안녕하세요
          <br />
          많은 유저들이 사용하는 서비스를 만들고 싶은 프론트엔드 개발자입니다.
          <br />
          계획하고 도전하는 것이 저의 장점입니다.
        </p>
        <button className="w-[160px] h-[70px] rounded-[30px] bg-[#369acb] text-[#fff] p-[10px]">
          더 알아보기
        </button>
      </div>
      <img
        src={landing_bg}
        className="w-[100%] h-[100%] absolute brightness-50 opacity-60 z-[-5]"
      />
    </article>
  );
}

export default Landing;

const maincontainer = css`
  display: flex;
  position: relative;
  .profile {
    width: 50%;
    border: 1px solid blue;
  }
  .info {
    width: 50%;
    border: 1px solid orange;
  }
`;
