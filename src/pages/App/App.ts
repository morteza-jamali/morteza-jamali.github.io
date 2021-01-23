import h from "react-hyperscript";
import styles from "./App.style";
import { Container, Grid } from "semantic-ui-react";

export default () =>
  h(Container, { ...styles(), fluid: true }, [
    h(Grid, [
      h(Grid.Row, [
        h(Grid.Column, { width: 4 }, "Left Column"),
        h(Grid.Column, { width: 8 }, "Right Column"),
      ]),
    ]),
  ]);
