import { HTMLAttributes, FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import { styles } from "./SideBar.style";
import { useFela } from "react-fela";

export interface ISideBarProps extends HTMLAttributes<HTMLDivElement> {}

export const SideBar: FunctionComponent<ISideBarProps> = (props) => {
  const { css } = useFela();

  return <Button className={styles(css)}>Example Button</Button>;
};
