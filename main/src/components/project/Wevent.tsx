import React, { useState, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import check from "../common/icons/icon/check.svg";
import landing_img from "../common/icons/icon/wevent_landing_img.png";
import edm_img from "../common/icons/icon/wevent_edm_img.png";
import edm_address from "../common/icons/icon/wevent_address_img.png";
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
  const [currentState, setCurrentState] = useState(0);

  const onPrev = () => swiperRef.current?.slidePrev();
  const onNext = () => swiperRef.current?.slideNext();

  return (
    <article className="w-[100%] flex flex-col items-center rounded-[10px] px-[25px] py-[45px] bg-[#fff]">
      <section className="flex flex-col items-center mb-[30px] tablet:mb-0">
        <h4 className="text-[35px] font-[700] mb-[10px]">WEVENT</h4>
        <p className="text-[17px] text-[#9a9a9a]">
          2022.11 - 2023.06 (회사 서비스)
        </p>
      </section>
      <section className="w-[100%] flex tablet:flex-col mobile:flex-col">
        <div
          className="w-[60%] tablet:w-full mobile:w-full h-[550px] flex justify-center items-center"
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
          <div className="border-[1px] border-[#eaeaea] rounded-[10px]">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
              }}
              onSlideChange={(swiper) => {
                const { realIndex } = swiper;
                setCurrentState(realIndex);
              }}
              loop
            >
              {imgArr?.map((e: { id: number; imgUrl: string }, i) => (
                <SwiperSlide key={i} virtualIndex={i}>
                  <div className="w-[600px] h-[480px] flex justify-center items-center">
                    <img
                      src={e.imgUrl}
                      className="w-[595px] h-[480px] rounded-[10px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
        <div className="w-[40%] tablet:w-full mobile:w-full flex flex-col p-[20px]">
          <div
            css={css`
              li {
                line-height: 150%;
                margin-bottom: 10px;
              }
            `}
          >
            <p className="text-[17px] font-[600] mb-[20px]">
              웹에서 세미나 및 컨퍼런스를 열수 있는 웨비나 플랫폼
            </p>
            <p className="text-justify leading-normal mb-[15px]">
              메인 페이지, 유저 페이지, 관리자 페이지, 총 3개의 웹페이지로
              구성되어 있는 서비스에서 EDM 제작 페이지 부분을 주로 구현했습니다.
              react-beautiful-dnd와 tinyMCE 에디터를 활용하여 레이아웃, 템플릿
              구성 등의 다양한 기능을 개발했고 이로 인해 UX의 자율성 범위를
              확대하였습니다.
            </p>
            <li>EDM(electronic direct mail) 캔버스 제작 페이지 기능 구현</li>
            <li>관리자 페이지에서 사용자를 위한 테마 제작 페이지 기능 구현</li>
            <li>
              react-beautiful-dnd와 unsplash, tinyMCE 에디터를 사용해 사용자
              취향 반영
            </li>
            <li>
              사용자 클릭 영역에 따라 사용자의 편집 범위 표시 및 자율성 확대
            </li>
            <li>디자인 통일성과 생산성을 높이기 위한 디자인 시스템 구현</li>
          </div>
          <div className="w-[80%] tablet:w-full mobile:w-full h-[1px] bg-[#9a9a9a] my-[30px]" />
          <div className="w-[100%] flex flex-col items-start">
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">URL</p>
              <a href="https://wevent.co.kr" target="_blank" rel="noreferrer">
                <p className="underline">배포 링크 보러가기</p>
              </a>
            </div>
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">Frontend</p>
              <p>React, Next, Typescript, Vite, emotion, Storybook</p>
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