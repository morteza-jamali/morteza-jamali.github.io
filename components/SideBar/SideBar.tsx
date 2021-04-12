import React from "react";
import { Button } from "@material-ui/core";

export interface ISideBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SideBar: React.FunctionComponent<ISideBarProps> = (props) => (
  <Button variant="contained" color="primary">
    Example Button
  </Button>
);
