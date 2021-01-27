import h from "react-hyperscript";
import React from "react";
import styles from "./SideBar.style";
import Items from "./Items";
import Icon from "../Icon/Icon";
import { useHistory, useLocation } from "react-router-dom";
import { Sidebar, SidebarItem } from "react-rainbow-components";

const SideBarItemLabel: SideBarComponent.Item.Label = (label) =>
  h("span.all-caps", label);

const SideBarItems: SideBarComponent.Item.Function = (
  handleRoute,
  selectedItem,
  array = []
) => {
  Items.map(({ name, label, icon, path }, key) => {
    return array.push(
      h(".width-100", { className: selectedItem === name ? "actived" : "" }, [
        h(SidebarItem, {
          name,
          onClick: () => handleRoute(path),
          label: SideBarItemLabel(label),
          icon: h(Icon, { icon, size: "2x", ...styles().icon }),
          key,
        }),
      ])
    );
  });

  return array;
};

class SideBarClass extends React.Component {
  state: {
    selectedItem: string;
  };
  handleRoute: SideBarComponent.HandleRouteFunction;

  constructor(props: any) {
    super(props);

    this.state = {
      selectedItem: props.selectedItem,
    };
    this.handleRoute = props.handleRoute;
  }

  handleOnSelect = (_event: any, selectedItem: string) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return h(
      Sidebar,
      {
        selectedItem,
        onSelect: this.handleOnSelect,
        className: `height-100 padding-s ${styles().sidebar} `,
      },
      SideBarItems(this.handleRoute, selectedItem)
    );
  }
}

const SideBar: SideBarComponent.Function = () => {
  let history = useHistory();
  let location = useLocation();
  let selectedItem: string = "";

  for (let item of Items) {
    if (location.pathname === item.path) {
      selectedItem = item.name;
    }
  }

  const handleRoute = (path: string) => {
    history.push(path);
  };

  return h(SideBarClass, { handleRoute, selectedItem });
};

export default SideBar;
