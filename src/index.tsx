import React from "react";
import ReactDOM from "react-dom";
import _styles from "./global.style";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/App/App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
