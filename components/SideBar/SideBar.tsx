import { HTMLAttributes, FunctionComponent } from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@material-ui/core";
import { drawer, drawerPaper, listItem } from "./SideBar.style";
import { useFela } from "react-fela";

export interface ISideBarProps extends HTMLAttributes<HTMLDivElement> {
  lists: {
    text: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  }[][];
}

export const SideBar: FunctionComponent<ISideBarProps> = ({ lists }) => {
  const { css } = useFela();

  return (
    <Drawer
      className={drawer(css)}
      variant="permanent"
      classes={{
        paper: drawerPaper(css),
      }}
      anchor="left"
    >
      {lists.map((list, list_index) => (
        <List key={list_index}>
          {list.map(({ text, Icon }, item_index) => (
            <ListItem
              button
              className={listItem(css)}
              key={`${text}${item_index}`}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      ))}
    </Drawer>
  );
};
