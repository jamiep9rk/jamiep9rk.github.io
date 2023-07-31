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
        <h1 className="text-[50px] text-[#fff] font-[600]">- 박정현 -</h1>
        <h1 className="text-[50px] text-[#fff] font-[600]">
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
          많은 유저들이 사용하는 서비스를 개발하고 싶은 2년차 프론트엔드
          개발자입니다.
          <br />
          동료들과의 커뮤니케이션을 통해 업무 효율성을 향상시키는 것이 저의
          장점입니다.
        </p>
        <Link to="about-container" spy={true} smooth={true}>
          <button
            className="h-[70px] flex items-center rounded-[30px] bg-[#369acb] text-[#fff] font-[600] px-[35px] py-[10px]"
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
