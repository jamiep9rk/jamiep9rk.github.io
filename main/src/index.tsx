import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App";

import { global } from "./styles/global";
import "./styles/reset.css";

const $root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot($root).render(
  <React.StrictMode>
    <Global styles={global} />
    <App />
  </React.StrictMode>
);
