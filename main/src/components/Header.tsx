import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-scroll";

function Header() {
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
    </article>
  );
}

export default Header;

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
