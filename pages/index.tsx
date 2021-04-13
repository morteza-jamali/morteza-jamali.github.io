import { FunctionComponent } from "react";
import { Container, Box } from "@material-ui/core";
import { useFela } from "react-fela";
import { Home } from "@material-ui/icons";
import { Head, SideBar, ISideBarProps } from "../components/.";
import { flexBox, fixedBox } from "../styles/index.style";

const lists: ISideBarProps["lists"] = [
  [
    { text: "home", Icon: Home },
    { text: "home", Icon: Home },
    { text: "home", Icon: Home },
  ],
];

const Index: FunctionComponent = () => {
  const { css } = useFela();

  return (
    <Container disableGutters maxWidth={false}>
      <Head title="My Portfolio" />
      <Box className={fixedBox(css)}>
        <Box className={flexBox(css)}>
          <SideBar lists={lists} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            officiis architecto ratione fuga. Vel voluptatem, iusto amet
            laborum, quibusdam, aliquid eius harum aperiam dolor placeat dolores
            quaerat ipsum ut laudantium?
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
