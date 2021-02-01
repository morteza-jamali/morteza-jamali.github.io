import h from "react-hyperscript";
import styles from "./Card.style";
import Icon from "../Icon/Icon";
import LoadingShape from "../LoadingShape/LoadingShape";
import { Card as RainBowCard, ButtonIcon } from "react-rainbow-components";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Card: CardComponent.Function = ({ image, title, link }) => {
  let _styles = styles(image);

  return h(
    RainBowCard,
    {
      className: `flex flex-column width-100 height-100 ${_styles.card}`,
      title,
      footer: h(".rainbow-align-content_space-between", [
        h(".rainbow-flex", [
          h(ButtonIcon, {
            icon: h(Icon, { icon: faHeart }),
            className: "rainbow-m-right_xx-small",
          }),
          h(ButtonIcon, { icon: h(Icon, { icon: faShareAlt }) }),
          h(ButtonIcon, {
            icon: h(Icon, { icon: faCloudDownloadAlt }),
            onClick: () => {
              console.log(link);
            },
          }),
        ]),
      ]),
    },
    [
      h(".book-cover.width-100.flex-1-1-auto", [
        h(LoadingShape, {
          variant: "image",
          shape: "square",
          className: `${_styles.loadingShape}`,
        }),
      ]),
    ]
  );
};

export default Card;
