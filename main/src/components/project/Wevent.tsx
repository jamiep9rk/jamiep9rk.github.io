import React, { useState, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import check from "../common/icons/icon/check.svg";
import landing_img from "../common/icons/icon/wevent_landing_img.png";
import edm_img from "../common/icons/icon/wevent_edm_img.png";
import edm_address from "../common/icons/icon/wevent_address.png";
import setting_img from "../common/icons/icon/wevent_setting_img.png";
import chevron_left from "../common/icons/icon/chevron_left.svg";
import chevron_right from "../common/icons/icon/chevron_right.svg";

const imgArr = [
  { id: 1, imgUrl: landing_img },
  { id: 2, imgUrl: edm_img },
  { id: 3, imgUrl: edm_address },
  { id: 4, imgUrl: setting_img },
];

export default function Wevent() {
  const swiperRef = useRef<SwiperCore>();
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <article className="w-[100%] flex flex-col items-center rounded-[10px] px-[25px] py-[45px] bg-[#fff]">
      <section className="flex flex-col items-center mb-[30px]">
        <h4 className="text-[35px] font-[700] mb-[10px]">WEVENT</h4>
        <p className="text-[17px] text-[#9a9a9a]">
          2022.11 - 2023.06 (회사 서비스)
        </p>
      </section>
      <section className="w-[100%] flex">
        <div
          className="w-[50%] h-[550px] flex justify-center items-center"
          css={css`
            .swiper {
              max-width: 500px !important;
              overflow: hidden !important;
            }
            .swiper-wrapper {
              display: flex !important;
            }
            .swiper-slide {
              width: 500px !important;
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
                  className="w-[500px] h-[480px] flex justify-center items-center"
                >
                  <img src={e.imgUrl} className="w-[495px] h-[480px]" />
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
        <div className="w-[50%] flex flex-col p-[40px]">
          <div
            css={css`
              li {
                line-height: 150%;
                margin-bottom: 10px;
              }
            `}
          >
            <p className="text-[17px] font-[600] mb-[20px]">
              웹에서 세미나 및 컨퍼런스를 열수 있는 웨비나 플랫폼입니다.
            </p>
            <p className="text-justify leading-normal mb-[15px]">
              메인 페이지, 유저 페이지, 관리자 페이지, 총 3개의 웹페이지로
              구성되어 있는 <br />큰 규모의 서비스였고 에디터 라이브러리를
              사용한 개발에 참여함으로써 <br />
              UX의 범위 확대를 위해 다양한 시도를 해 볼 수 있는
              프로젝트였습니다.
            </p>
            <li>EDM 웹 이메일 디자인 제작 페이지 기능 구현</li>
            <li>백오피스 페이지에서 테마 제작 페이지 기능 구현</li>
            <li>
              react-beautiful-dnd와 unsplash, tinyMCE 에디터를 사용해 사용자
              취향 반영
            </li>
            <li>
              사용자 클릭 영역에 따라 사용자의 편집 범위 표시 및 자율성 확대
            </li>
            <li>이벤트 관련 설정 CRUD 기능 구현</li>
          </div>
          <div className="w-[80%] h-[1px] bg-[#9a9a9a] my-[30px]" />
          <div className="w-[100%] flex flex-col items-start">
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">URL</p>
              <a href="https://wevent.co.kr" target="_blank" rel="noreferrer">
                <p className="underline">https://wevent.co.kr</p>
              </a>
            </div>
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">Frontend</p>
              <p>React, Next, Typescript, Vite, emotion</p>
            </div>
            <div className="flex items-center">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">Deployment</p>
              <p>Vercel, AWS</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
