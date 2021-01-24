import h from "react-hyperscript";
import styles from "./SideBar.style";
import Items from "./Items";
import Icon from "../Icon/Icon";
import { Sidebar, SidebarItem } from "react-rainbow-components";

const SideBarItems = (
  array: HyperScript.ReturnType[] = []
): HyperScript.ReturnType[] => {
  Items.map(({ name, label, icon }, key) => {
    return array.push(
      h(SidebarItem, { name, label, icon: h(Icon, { icon }), key })
    );
  });

  return array;
};

const SideBar: SideBarComponent.Function = () => h(Sidebar, { ...styles() }, SideBarItems());

export default SideBar;
