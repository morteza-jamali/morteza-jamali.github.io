import h from "react-hyperscript";
import styles from "./SideMenu.style";
import config from "../../configs/sideMenu.json";
import { Menu, Icon } from "semantic-ui-react";

declare interface SideMenuItemsType {
  name: JSX.LibraryManagedAttributes<typeof Icon, Icon["props"]["name"]>;
  text: string;
}

const SideMenuItems = () => {
  let result: ReturnType<typeof h>[] = [];

  (config.items as SideMenuItemsType[]).map(({ name, text }) =>
    result.push(h(Menu.Item, { name }, [h(Icon, { name }), h("", text)]))
  );

  return result;
};

const SideMenu = () =>
  h(Menu, { ...styles(), vertical: true, icon: "labeled" }, SideMenuItems());

export default SideMenu;
