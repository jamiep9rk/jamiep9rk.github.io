import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { Link } from "react-scroll";

import Landing from "../components/Landing";
import About from "../components/About";
import Project from "../components/Project";
import Skill from "src/components/Skill";
import Career from "src/components/Career";
import Footer from "src/components/Footer";
import top from "../components/common/icons/icon/top.png";

export default function Main() {
  const [scrollY, setScrollY] = useState(0);
  const [topBtn, setTopBtn] = useState(false);

  const handleFollow = () => {
    setScrollY(window.scrollY);
    if (scrollY > 550) {
      setTopBtn(true);
    } else {
      setTopBtn(false);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <div css={main}>
      <Landing />
      <About />
      <Project />
      <Career />
      {/* <Skill /> */}
      <Footer />
      {topBtn && (
        <Link to="landing-container" spy={true} smooth={true}>
          <div className="w-[60px] h-[60px] fixed bottom-[20px] right-[25px] opacity-50 cursor-pointer">
            <img src={top} />
          </div>
        </Link>
      )}
    </div>
  );
}
