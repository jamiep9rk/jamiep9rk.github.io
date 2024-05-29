import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-scroll";

import landing_bg from "./common/icons/icon/landing_bg.jpg";
import arrow from "./common/icons/icon/arrow.png";

function Landing() {
  return (
    <article className="landing-container" css={maincontainer}>
      <div className="w-[100%] flex flex-col items-center p-[140px]">
        {/* <h1 className="text-[50px] text-[#fff] font-[600]">- 박정현 -</h1>
        <h1 className="text-[50px] text-[#fff] font-[600]">
          프론트엔드 개발자 포트폴리오
        </h1> */}
        <div
          className="w-[50px] h-[2px] my-[20px]"
          css={css`
            background: #83a2ff;
          `}
        />
        <p className="text-center text-[#fff] text-[20px] leading-[35px] mb-[30px]">
          <span className="text-[23px] font-[600]">
            안녕하세요 3년차 프론드엔드 개발자 박정현입니다
          </span>
          <br />
          <br />
          부트캠프를 통해 개발자로 전향했고 그 경험을 바탕으로 <br />
          개발자를 희망하는 교육생을 돕는 멘토링 활동을 하며 성취감을
          느꼈습니다. <br />
          개발에 관심이 있는 학생들이 얻어가는게 많은 프로그램 개발에 참여하고
          싶습니다.
          {/* 안녕하세요
          <br />
          많은 유저들이 사용하는 서비스를 개발하고 싶은 2년차 프론트엔드
          개발자입니다.
          <br />
          동료들과의 커뮤니케이션을 통해 업무 효율성을 향상시키는 것이 저의
          장점입니다. */}
        </p>
        <Link to="about-container" spy={true} smooth={true}>
          <button
            className="h-[70px] flex items-center rounded-[30px] bg-[#83A2FF] text-[#fff] font-[600] px-[35px] py-[10px]"
            css={css`
              img {
                width: 15px;
                height: 15px;
              }
              svg {
                fill: #fff;
              }
            `}
          >
            더 알아보기
            <img src={arrow} className="rotate-90 ml-[5px] mt-[3px]" />
          </button>
        </Link>
      </div>
      <img
        src={landing_bg}
        className="w-[100%] h-[100%] absolute opacity-70 z-[-5]"
        css={css`
          filter: brightness(0.3);
        `}
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
