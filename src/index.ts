import h from "react-hyperscript";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./global.style";
import routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = (array: any[] = []): ReturnType<typeof h>[] => {
  routes.map(({ path, component, exact }) =>
    array.push(h(Route, { path, exact, component }))
  );
  return array;
};

ReactDOM.render(
  h("div", { ...styles() }, [
    h(React.Fragment, [h(BrowserRouter, [h(Switch, Routes())])]),
  ]),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
