import React, { useState, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import check from "../common/icons/icon/check.svg";
import landing_img from "../common/icons/icon/dokdo_landing_img.png";
import list_img from "../common/icons/icon/dokdo_list_img.png";
import edit_img from "../common/icons/icon/dokdo_edit_img.png";
import chevron_left from "../common/icons/icon/chevron_left.svg";
import chevron_right from "../common/icons/icon/chevron_right.svg";

const imgArr = [
  { id: 1, imgUrl: landing_img },
  { id: 2, imgUrl: list_img },
  { id: 3, imgUrl: edit_img },
];

export default function Dokdo() {
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
        <h4 className="text-[35px] font-[700] mb-[10px]">DOKDO ADMIN</h4>
        <p className="text-[17px] text-[#9a9a9a]">
          2022.06 - 2022.11 (회사 서비스)
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
              // setCurrentState(result);
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
              동북아역사재단 독도체험관 웹페이지 백오피스
            </p>
            <p className="text-justify leading-normal mb-[25px]">
              2022년 10월 독도체험관이 이전함에 따라 노후화된 웹페이지를 새롭게
              React로 리뉴얼한 프로젝트입니다. CMS에서 엑셀 파일을 위해 필요한
              데이터를 추출하고 테이블화를 통해 데이터를 시각화하여 UX를
              개선했습니다.
            </p>
            <li>독도 체험관 관리자 웹페이지 게시판 CRUD 기능 구현</li>
            <li>엑셀 파일 다운로드 기능을 위한 데이터 추출 및 커스터마이징 </li>
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
              <p>KT cloud</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
