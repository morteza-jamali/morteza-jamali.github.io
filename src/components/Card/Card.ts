import h from "react-hyperscript";
import styles from "./Card.style";
import Icon from "../Icon/Icon";
import {
  Card as RainBowCard,
  ButtonIcon,
  Button,
} from "react-rainbow-components";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Card = () =>
  h(
    RainBowCard,
    {
      className: `width-100 height-100 ${styles()}`,
      title: "Experimental text",
      actions: h(Button, { variant: "neutral", label: "Add" }),
      footer: h(".rainbow-align-content_space-between", [
        h(".rainbow-flex", [
          h(ButtonIcon, {
            icon: h(Icon, { icon: faHeart }),
            className: "rainbow-m-right_xx-small",
          }),
          h(ButtonIcon, { icon: h(Icon, { icon: faShareAlt }) }),
        ]),
      ]),
    },
    [h("span", "This is RainBow Tast Card")]
  );

export default Card;
