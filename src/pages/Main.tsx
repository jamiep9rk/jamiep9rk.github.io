import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Mealtomeal from "../components/Mealtomeal";
import Maplody from "../components/Maplody";
import Contact from "../components/Contact";

function Main() {
    return (
        <div className="main">
            <About />
            <Skills />
            <Mealtomeal />
            <Maplody />
            <Contact />
        </div>
    );
}

export default Main;
