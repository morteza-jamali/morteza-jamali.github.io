import h from "react-hyperscript";
import App from "./pages/App/App";
import Profile from "./pages/Profile/Profile";

declare interface IRoutes {
  path: string;
  component: () => ReturnType<typeof h>;
  exact?: boolean;
}

const routes: IRoutes[] = [
  { path: "/", component: App, exact: true },
  { path: "/profile", component: Profile },
];

export default routes;
