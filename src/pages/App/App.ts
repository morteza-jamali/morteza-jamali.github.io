import h from "react-hyperscript";
import styles from "./App.style";
import SideBar from "../../components/SideBar/SideBar";
import Page from "../../components/Page/Page";

const App = () =>
  h(Page, { ...styles(), className: "flex" }, [
    h(SideBar),
    h(".flex-1-0-auto", "This is An error section"),
  ]);

export default App;
