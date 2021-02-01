import h from "react-hyperscript";
import styles from "./Books.style";
import Card from "../../components/Card/Card";
import GroupComponent from "../../components/GroupComponent/GroupComponent";
import Icon from "../../components/Icon/Icon";
import { Button } from "react-rainbow-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import faker from "faker";

function BookGenerator() {
  let result = [];
  for (let i = 0; i <= 5; i++) {
    result.push(
      h(Card, {
        image: faker.image.imageUrl(),
        title: faker.commerce.productName(),
        link: faker.internet.url(),
      })
    );
  }

  return result;
}

const Book = () => {
  const [displayBooks, setDisplayBooks] = useState(false);

  return h([
    h(
      ".flex.group.group-m.group-column.width-100.height-100",
      { ...styles().intro, className: displayBooks ? "hide" : "" },
      [
        h(
          "ul.flex-1-1-auto.no-margin.align-items-center.justify-content-center",
          [
            h("li.width-100", [
              h("img", {
                className: "width-100",
                src: "assets/books.svg",
                alt: "books",
              }),
            ]),
          ]
        ),
        h("ul.no-margin.justify-content-center", [
          h("li", [h("h1.display-title", "Explore My library for free")]),
          h("li", [
            h(
              "p",
              `This is a testing text. This is a
            testing text. This is a testing text.`
            ),
          ]),
          h("li", [
            h(
              Button,
              {
                className: "margin-top-l",
                size: "large",
                onClick: () => {
                  setDisplayBooks(true);
                },
              },
              [
                h("span", "Explore"),
                h(Icon, { icon: faArrowRight, className: "margin-left-xs" }),
              ]
            ),
          ]),
        ]),
      ]
    ),
    h(GroupComponent, {
      array: BookGenerator(),
      row: 2,
      column: 3,
      ...styles().books,
      className: `padding-vertical-s padding-right-m ${
        displayBooks ? "" : "hide"
      }`,
    }),
  ]);
};

export default Book;
