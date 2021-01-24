import App from "./pages/App/App";
import Profile from "./pages/Profile/Profile";

const routes: IRoutesItem[] = [
  { path: "/", component: App, exact: true },
  { path: "/profile", component: Profile },
];

export default routes;
