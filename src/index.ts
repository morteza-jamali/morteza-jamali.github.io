import h from "react-hyperscript";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./global.style";
import routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Application } from "react-rainbow-components";

const Routes = (
  array: HyperScript.ReturnType[] = []
): HyperScript.ReturnType[] => {
  routes.map(({ path, component, exact }) =>
    array.push(h(Route, { path, exact, component }))
  );
  return array;
};

styles();

ReactDOM.render(
  h(Application, { className: "width-100 height-100" }, [
    h(React.Fragment, [h(BrowserRouter, [h(Switch, Routes())])]),
  ]),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
