import React from "react";
import { css } from "@emotion/react";

import Landing from "../components/Landing";
import About from "../components/About";
import Career from "../components/Career";
import Skills from "../components/Skills";
// import Mealtomeal from "../components/Mealtomeal";
// import Maplody from "../components/Maplody";

function Main() {
  return (
    <div css={main}>
      <Landing />
      <About />
      <Career />
      {/* <Skills />
      <Mealtomeal />
      <Maplody /> */}
    </div>
  );
}

export default Main;

const main = css``;
