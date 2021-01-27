import App from "./pages/App/App";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Books from "./pages/Books/Books";

const routes: RouterComponent.IRoutesItem[] = [
  { path: "/", component: App, exact: true },
  { path: "/profile", component: Profile },
  { path: "/projects", component: Projects },
  { path: "/books", component: Books },
];

export default routes;
