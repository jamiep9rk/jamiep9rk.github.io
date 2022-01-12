import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Main() {
    return (
        <div className="Main">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Main;
