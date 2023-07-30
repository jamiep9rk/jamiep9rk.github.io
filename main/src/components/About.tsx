import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profile from "./common/icons/icon/profile.jpg";
import email from "./common/icons/icon/mail.png";
import phone from "./common/icons/icon/cellphone.png";
import github from "./common/icons/icon/github.png";
import book from "./common/icons/icon/book.png";
import language from "./common/icons/icon/langauge.png";

type InfoType = {
  icon: string;
  label: string;
  value: string;
};

const infoArr = [
  {
    icon: email,
    label: "E-mail",
    value: "jamiecareer96@gmail.com",
  },
  { icon: phone, label: "Mobile", value: "010-6301-7841" },
  {
    icon: github,
    label: "Github",
    value: "https://github.com/jamiep9rk",
  },
  {
    icon: book,
    label: "Education",
    value: "리츠메이칸 대학교 국제관계학부 (2019년 졸업)",
  },
  {
    icon: language,
    label: "Language",
    value: "TOEIC(950), JPT(695)",
  },
];

function About() {
  return (
    <article className="about-container" css={maincontainer}>
      <h2 className="text-[45px] font-[700] mb-[10px]">ABOUT ME</h2>
      <div className="w-[200px] h-[1px] bg-[#9a9a9a] mb-[20px]" />
      <div className="w-[100%] flex items-center">
        <section className="w-[50%] flex justify-center items-center">
          <img
            src={profile}
            className="w-[300px] h-[300px] rounded-full mt-[30px] mb-[50px]"
          />
        </section>
        <div
          className="w-[1px] h-[80%]"
          css={css`
            background: #eaeaea;
          `}
        />
        <section className="w-[50%]">
          <div className="grid grid-rows-3 gap-[20px] text-[20px]">
            {infoArr.map((el: InfoType, i) => (
              <div className="flex items-center" key={i}>
                <img
                  src={el.icon}
                  css={css`
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    margin-right: 8px;
                  `}
                />
                <p className="w-[110px] font-[600]">{el.label}</p>
                {el.label === "Github" ? (
                  <a
                    href={el.value}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {el.value}
                  </a>
                ) : (
                  <p>{el.value}</p>
                )}
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
