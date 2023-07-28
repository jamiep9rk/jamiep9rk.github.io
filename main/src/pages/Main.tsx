import React from "react";
import { css } from "@emotion/react";

import Landing from "../components/Landing";
import About from "../components/About";
import Project from "../components/Project";
import SkillCareer from "../components/SkillCareer";
import Footer from "src/components/Footer";
// import Mealtomeal from "../components/Mealtomeal";
// import Maplody from "../components/Maplody";

function Main() {
  return (
    <div css={main}>
      <Landing />
      <About />
      <Project />
      <SkillCareer />
      <Footer />
      {/*<Mealtomeal />
      <Maplody /> */}
    </div>
  );
}

export default Main;

const main = css``;
