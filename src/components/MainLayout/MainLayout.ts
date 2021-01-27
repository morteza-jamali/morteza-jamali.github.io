import h from "react-hyperscript";
import SideBar from "../SideBar/SideBar";
import Page from "../Page/Page";
import routes from "../../routes";
import Router from "../Router/Router";
import { BrowserRouter, Switch } from "react-router-dom";

const MainLayout: MainLayoutComponent.Function = () =>
  h(BrowserRouter, [
    h(Page, { className: "flex" }, [
      h(".height-100.padding-m", [h(SideBar)]),
      h(".flex-1-0-auto", [h(Switch, Router(routes))]),
    ]),
  ]);

export default MainLayout;