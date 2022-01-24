import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Mealtomeal from "../components/Mealtomeal";
import Maplody from "../components/Maplody";

function Main() {
    return (
        <main className="main">
            <Landing />
            <About />
            <Skills />
            <Mealtomeal />
            <Maplody />
        </main>
    );
}

export default Main;
