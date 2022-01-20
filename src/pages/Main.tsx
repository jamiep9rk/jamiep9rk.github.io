import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Mealtomeal from "../components/Mealtomeal";
import Maplody from "../components/Maplody";

function Main() {
    return (
        <div className="main">
            <Landing />
            <About />
            <Skills />
            <Mealtomeal />
            <Maplody />
        </div>
    );
}

export default Main;
