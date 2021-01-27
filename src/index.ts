import h from "react-hyperscript";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./global.style";
import reportWebVitals from "./reportWebVitals";
import theme from "./Modules/Theme";
import MainLayout from "./components/MainLayout/MainLayout";
import { Application } from "react-rainbow-components";

ReactDOM.render(
  h(
    Application,
    { className: `width-100 height-100 ${styles()}`, theme: theme("dark") },
    [h(React.Fragment, [h(MainLayout)])]
  ),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
