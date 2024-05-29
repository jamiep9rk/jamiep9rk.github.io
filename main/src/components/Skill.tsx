import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import html from "./common/icons/icon/htmljscss.jpg";
import react from "./common/icons/icon/react.png";
import ts from "./common/icons/icon/ts.png";
import nextjs from "./common/icons/icon/nextjs.png";
import tailwind from "./common/icons/icon/tailwind.jpg";
import figma from "./common/icons/icon/figma.png";

const imgArr = [
  { id: 1, imgUrl: html },
  { id: 2, imgUrl: react },
  { id: 3, imgUrl: ts },
  { id: 4, imgUrl: nextjs },
  { id: 5, imgUrl: tailwind },
  { id: 6, imgUrl: figma },
];

export default function Skill() {
  return (
    <article className="skill-container w-[100%] flex flex-col items-center bg-[#FFE3BB] py-[80px]">
      <h2 className="text-[45px] text-[#000] font-[700] mb-[10px]">SKILLS</h2>
      <div className="w-[150px] h-[1px] bg-[#000] mb-[40px]" />
      <div
        className="w-[100%] h-[412px] grid grid-cols-2 gap-[15px] rounded-[10px] p-[25px]"
        css={css`
          img {
            height: 100px;
          }
        `}
      >
        {imgArr.map((el: { id: number; imgUrl: string }, i) => (
          <div key={i} className="flex justify-center">
            <img src={el.imgUrl} />
          </div>
        ))}
      </div>
    </article>
  );
}
