import h from "react-hyperscript";
import styles from "./Books.style";
import Card from "../../components/Card/Card";
import GroupMaker from "../../components/GroupMaker/GroupMaker";
import Icon from "../../components/Icon/Icon";
import { Button } from "react-rainbow-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BookGenerator() {
  let result = [];
  for (let i = 0; i <= 5; i++) {
    result.push(h(Card));
  }

  return result;
}

const Book = () =>
  h(".width-100.height-100", [
    h(
      ".flex.width-100.height-100.justify-content-flex-start.align-items-flex-start.flex-wrap.padding-vertical-xs.padding-right-m",
      { ...styles() },
      [
        h(Button, { variant: "brand" }, [
          h("span", "Explore books"),
          h(Icon, { icon: faArrowRight, className: "margin-left-xs" }),
        ]),
      ]
    ),
    h(
      ".flex.width-100.height-100.justify-content-flex-start.align-items-flex-start.flex-wrap.padding-vertical-xs.padding-right-m.hide",
      { ...styles() },
      [GroupMaker(BookGenerator(), 3, 2)]
    ),
  ]);

export default Book;
