import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import check from "../common/icons/icon/check.svg";
import landing_img from "../common/icons/icon/kovo_landing_img.png";
import mypage_img from "../common/icons/icon/kovo_mypage_stat_img.png";
import ticket_img from "../common/icons/icon/kovo_ticket_img.png";
import ranking_img from "../common/icons/icon/kovo_main_ranking_img.png";
import chevron_left from "../common/icons/icon/chevron_left.svg";
import chevron_right from "../common/icons/icon/chevron_right.svg";

const imgArr = [
  { id: 1, imgUrl: landing_img },
  { id: 2, imgUrl: mypage_img },
  { id: 3, imgUrl: ticket_img },
  { id: 4, imgUrl: ranking_img },
];

export default function Kovo() {
  const swiperRef = useRef<SwiperCore>();
  const [currentState, setCurrentState] = useState(0);

  const onPrev = () => swiperRef.current?.slidePrev();
  const onNext = () => swiperRef.current?.slideNext();

  return (
    <article className="w-[100%] flex flex-col items-center rounded-[10px] px-[25px] py-[45px] bg-[#fff]">
      <section className="flex flex-col items-center mb-[30px] tablet:mb-0 mobile:mb-0">
        <h4 className="text-[35px] font-[700] mb-[10px]">KOVO WEB/APP</h4>
        <p className="text-[17px] text-[#9a9a9a]">2023.06 - 현재</p>
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
              한국배구연맹 통합 웹 페이지/앱 서비스
            </p>
            <p className="text-justify leading-normal mb-[15px]">
              기존의 14개의 구단과 한국배구연맹 홈페이지의 통합을 목표로 진행된
              웹/앱 서비스입니다. 16만 명의 회원을 보유하고 있으며 동시 접속
              최대 11만의 규모를 가진 프로젝트라서 복잡도와 가독성 이슈를
              개선하기 위해 지속적인 페이지 구조 변경 및 컴포넌트 분리
              리팩토링을 하고 있습니다.
            </p>
            <li>
              NICE 인증, IPIN인증을 통한 회원가입 구현을 통해 전 연령 14만
              유저의 접근성 확대 및 정보 수집
            </li>
            <li>
              인터파크와 협업하여 티켓 구매 브릿지 페이지 및 티켓 내역 조회
              페이지 구현
            </li>
            <li>구단별, 종목별, 랭킹별 정보 표시를 위한 테이블 데이터 가공</li>
            <li>
              웹페이지에 업데이트 되는 컨텐츠 및 설정, 회원 정보를 관리할 수
              있는 관리자 페이지 개발
            </li>
            <li>
              async storage를 이용해 유저 정보 저장을 하여 웹뷰 페이지를 포함한
              앱 서비스 개발
            </li>
            <li>
              페이지 15개에 달하는 큰 프로젝트 규모에 복잡도와 가독성 문제를
              개선하기 위해 페이지 구조 변경 및 컴포넌트 분리
            </li>
          </div>
          <div className="w-[80%] tablet:w-full mobile:w-full h-[1px] bg-[#9a9a9a] my-[30px]" />
          <div className="w-[100%] flex flex-col items-start">
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">URL</p>
              <a href="https://kovo.co.kr/" target="_blank" rel="noreferrer">
                <p className="underline">배포 링크 보러가기</p>
              </a>
            </div>
            <div className="flex items-center mb-[15px]">
              <img src={check} className="w-[20px] h-[20px] mr-[5px]" />
              <p className="w-[110px] font-[700]">Frontend</p>
              <p>React, React Native, Vercel, Typescript</p>
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
