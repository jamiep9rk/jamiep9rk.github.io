import React, { useState, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Pagination } from "swiper/modules";

import landing_img from "../common/icons/icon/landing_img.png";
import signup_img from "../common/icons/icon/signup_img.png";
import mypage_img from "../common/icons/icon/mypage_img.png";
import stat_img from "../common/icons/icon/stat_img.png";
import response_img from "../common/icons/icon/response_img.png";
import chevron_left from "../common/icons/icon/chevron_left.svg";
import chevron_right from "../common/icons/icon/chevron_right.svg";

const imgArr = [
  { id: 1, imgUrl: landing_img },
  { id: 2, imgUrl: signup_img },
  { id: 3, imgUrl: mypage_img },
  { id: 4, imgUrl: stat_img },
  { id: 5, imgUrl: response_img },
];

export default function Dmade() {
  const swiperRef = useRef<SwiperCore>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentState, setCurrentState] = useState("");

  const prevSlide = () => {
    setCurrentSlide(currentSlide + 1);
    swiperRef.current?.slideTo(0);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide - 1);
    swiperRef.current?.slideTo(0);
  };

  return (
    <article
      className="w-[100%] flex flex-col items-center rounded-[10px] p-[25px]"
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
          className="w-[50%] h-[550px] flex justify-center items-center"
          css={css`
            .swiper {
              max-width: 400px !important;
              overflow: hidden !important;
            }
            .swiper-pagination {
              height: 30px !important;
              background: #9a9a9a;
            }
            .swiper-wrapper {
              display: flex !important;
            }
            .swiper-slide {
              width: 400px !important;
            }
          `}
        >
          <button
            type="button"
            onClick={() => {
              swiperRef.current?.slidePrev();
              // if (currentState === '2023') {
              //     prevYear();
              // }
            }}
            className="border-[#c8c8c8] border rounded-full mr-[18px]"
          >
            <img src={chevron_left} className="w-[25px] h-[25px]" />
          </button>
          <Swiper
            effect={"coverflow"}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            navigation
            pagination={true}
            modules={[Pagination]}
            slidesPerGroup={1}
            onSlideChange={(swiper) => {
              const { isBeginning, isEnd } = swiper;
              let result = "";
              if (isBeginning) result = "start";
              if (isEnd) result = "end";
              setCurrentState(result);
            }}
            css={css`
              border: 1px solid #9a9a9a;
              border-radius: 4px;
            `}
          >
            {imgArr?.map((e: { id: number; imgUrl: string }, i) => (
              <SwiperSlide key={i} virtualIndex={i}>
                <div
                  onClick={() => setCurrentSlide(e.id)}
                  className="w-[460px] h-[480px] flex justify-center items-center"
                  // css={css`
                  //   transition: all 0.3s;
                  //   display: flex;
                  //   padding-top: 4px;
                  //   justify-content: center;
                  //   align-items: center;
                  //   border: 1px solid var(--gray-200-eaeaea, #eaeaea);
                  //   background: #fff;
                  //   cursor: pointer;
                  //   ${currentSlide === e.id &&
                  //   css`
                  //     border: 1px solid var(--gray-200-eaeaea, #eaeaea);
                  //     background: #2438ef;
                  //     color: #fff;
                  //   `}
                  // `}
                >
                  <img src={e.imgUrl} className="w-[460px] h-[480px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            onClick={() => {
              swiperRef.current?.slideNext();
              // if (currentState === '2004') {
              //     nextYear();
              // }
            }}
            className="border-[#c8c8c8] border rounded-full ml-[18px]"
          >
            <img src={chevron_right} className="w-[25px] h-[25px]" />
          </button>
        </div>
        <div
          className="w-[50%] flex flex-col items-center p-[20px]"
          css={css`
            border: 1px solid red;
          `}
        >
          <div className="">
            <p className="font-[600]">
              웹포스터 제작 및 통계관리 플랫폼입니다.
            </p>
            <li>로그인, 마이페이지 기능 구현</li>
            <li>Chart.js를 이용해 데이터 시각화 개선하여 유저의 경험 향상</li>
          </div>
          <div className="w-[80%] h-[1px] bg-[#9a9a9a] my-[20px]" />
          <div>
            {/* <Icons icon="check_icon" /> */}
            <p>URL</p>
          </div>
        </div>
      </section>
    </article>
  );
}
