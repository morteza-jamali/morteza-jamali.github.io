import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Items: SideBarComponent.Item.IPropsType[] = [
  {
    name: "home",
    label: "home",
    path: "/",
    icon: faHome,
  },
  {
    name: "profile",
    label: "profile",
    path: "/profile",
    icon: faUser,
  },
  {
    name: "projects",
    label: "projects",
    path: "/projects",
    icon: faCode,
  },
  {
    name: "books",
    label: "books",
    path: "/books",
    icon: faBookOpen,
  },
];

export default Items;
