import h from "react-hyperscript";
import { Route } from "react-router-dom";

const Router: RouterComponent.Function = (routes, array = []) => {
  routes.map(({ path, component, exact }) =>
    array.push(h(Route, { path, exact, component }))
  );
  return array;
};

export default Router;
