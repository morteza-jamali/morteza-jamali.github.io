import h from "react-hyperscript";
import styles from "./App.style";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Container, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const App = () =>
  h(Container, { ...styles(), fluid: true }, [
    h(Grid, { columns: 2 }, [
      h(Grid.Column, { stretched: true, width: 2 }, [h(SideMenu)]),
      h(Grid.Column, { stretched: true, width: 14 }, [
        h(Link, { to: "/profile" }, "Go to Profile"),
      ]),
    ]),
  ]);

export default App;
