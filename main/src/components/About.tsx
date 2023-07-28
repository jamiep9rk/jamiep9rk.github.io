import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type InfoType = {
  icon: string;
  label: string;
  value: string;
};

const infoArr = [
  {
    icon: "far fa-envelope",
    label: "E-mail",
    value: "jamiecareer96@gmail.com",
  },
  { icon: "fas fa-mobile-alt", label: "Mobile", value: "010-6301-7841" },
  {
    icon: "fab fa-github",
    label: "Github",
    value: "https://github.com/jamiep9rk",
  },
  {
    icon: "fas fa-book",
    label: "Education",
    value: "리츠메이칸 대학교 국제관계학부",
  },
];

function About() {
  return (
    <article className="" css={maincontainer}>
      <h2 className="text-[45px] font-[700] mb-[20px]">ABOUT ME</h2>
      <div className="w-[100%] flex items-center">
        <section
          className="w-[50%] flex justify-center items-center"
          css={css`
            border: 1px solid blue;
          `}
        >
          <img
            src=""
            className="w-[300px] h-[300px] rounded-full mb-[50px]"
            css={css`
              border: 1px solid #000000;
            `}
          />
        </section>
        <div
          className="w-[1px] h-[80%]"
          css={css`
            background: #eaeaea;
          `}
        />
        <section
          className="w-[50%]"
          css={css`
            border: 1px solid orange;
          `}
        >
          <div className="grid grid-rows-3 gap-[10px] text-[20px]">
            {infoArr.map((el: InfoType, i) => (
              <div className="flex items-center" key={i}>
                <i
                  className={el.icon}
                  css={css`
                    width: 30px;
                    display: flex;
                    justify-content: center;
                  `}
                />
                <p className="w-[110px] font-[600]">{el.label}</p>
                <p>{el.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default About;

const maincontainer = css`
  /* background-color: #369acb; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
`;
