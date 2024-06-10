import React from "react";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-scroll";

export default function Header() {
  // const navigate = useNavigate();
  const headerArr = [
    { to: "about-container", title: "ABOUT" },
    { to: "project-container", title: "PROJECTS" },
    { to: "career-container", title: "CAREER" },
    // { to: "skill-container", title: "SKILLS" },
  ];

  return (
    <article css={header}>
      <div className="grid grid-cols-3 gap-[10px] text-center">
        {headerArr.map((el: { to: string; title: string }, i) => (
          <Link
            to={el.to}
            key={i}
            spy={true}
            smooth={true}
            className="cursor-pointer"
          >
            <p className="text-[22px]">{el.title}</p>
          </Link>
        ))}
      </div>
      {/* <div className="w-[1px] h-[20px] bg-[#eaeaea] mr-4" /> */}
      {/* <div onClick={() => navigate("en")}>
        <p className="text-[18px] text-[#6a6a6a]">EN</p>
      </div> */}
    </article>
  );
}

const header = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: white;
  font-size: 28px;
  font-weight: bold;
  z-index: 999;
  border-bottom: 5px solid #83a2ff;
  padding: 0 50px;
`;
