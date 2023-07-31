import React, { useState, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import check from "../common/icons/icon/check.svg";
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

  return (
    <article
      className="w-[100%] flex flex-col items-center rounded-[10px] px-[25px] py-[45px]"
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
          className="w-[60%] h-[550px] flex justify-center items-center"
          css={css`
            .swiper {
              max-width: 600px !important;
              overflow: hidden !important;
            }
            .swiper-wrapper {
              display: flex !important;
            }
            .swiper-slide {
              width: 600px !important;
            }
            .swiper-pagination {
              width: 100% !important;
              display: grid;
              justify-content: center;
              align-items: center;
              background: #fff !important;
              gap: 5px;
              border-top: 1px solid #9a9a9a;
              padding: 5px;
              span {
                background: #369acb !important;
                border-radius: 8px !important;
              }
            }
            .swiper-pagination-bullets {
              text-align: left;
              width: fit-content;
              display: flex;
            }
            .swiper-pagination-bullet {
              cursor: pointer;
            }
            .swiper-pagination-bullet-active {
              background-color: #369acb;
              width: 15px !important;
              height: 15px !important;
            }
            .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
              display: flex;
              opacity: 1;
              width: 12px !important;
              height: 12px !important;
            }
          `}
        >
          <button
            type="button"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            className="border-[#c8c8c8] border rounded-full mr-[18px]"
          >
            <img src={chevron_left} className="w-[25px] h-[25px]" />
          </button>
          <Swiper
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            onSlideChange={(swiper) => {
              const { isBeginning, isEnd } = swiper;
              let result = "";
              if (isBeginning) result = "start";
              if (isEnd) result = "end";
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
                  className="w-[600px] h-[480px] flex justify-center items-center"
                >
                  <img src={e.imgUrl} className="w-[595px] h-[480px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            className="border-[#c8c8c8] border rounded-full ml-[18px]"
          >
            <img src={chevron_right} className="w-[25px] h-[25px]" />
          </button>
        </div>
        <div className="w-[40%] flex flex-col p-[50px]">
          <div
            css={css`
              li {
                line-height: 150%;
                margin-bottom: 10px;
              }
            `}
          >
            <p className="text-[17px] font-[600] mb-[20px]">
              온라인 고객을 모집할 수 있는 웹포스터 제작 및 통계관리 플랫폼
            </p>
            <p className="text-justify mb-[25px]">
              고객이 웹포스터를 통해 얻은 데이터를 볼 수 있는 마이페이지를
              구현했습니다. 사용자가 필요한 실시간 데이터를 추출하여 Chart.js를
              이용해 시각화를 향상시키고 사용자가 모니터링 하기 쉽도록
              커스터마이징하였습니다.
            </p>
            <li>로그인, 회원가입 기능 구현</li>
            <li>마이페이지 웹페이지 리스트 출력, CRUD 기능 구현</li>
            <li>Chart.js를 이용해 데이터 시각화 개선하여 유저의 경험 향상</li>
          </div>
          <div className="w-[90%] h-[1px] bg-[#9a9a9a] my-[20px]" />
          <div className="w-[100%] flex flex-col items-start">
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">Frontend</p>
              <p>React, Typescript, styled-component, Recoil</p>
            </div>
            <div className="flex items-center">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">Deployment</p>
              <p>AWS</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
