import h from "react-hyperscript";
import styles from "./GroupMaker.style";

const GroupMaker: GroupMaker.Function = (array, column, row) => {
  let groupContent: HyperScript.ReturnType[] = [];

  for (let r = 1; r <= row; r++) {
    let rowContent: HyperScript.ReturnType[] = [];
    for (let c = 1; c <= column; c++) {
      rowContent.push(h("li.width-100.height-100.no-margin", [array[0]]));
      array.shift();
    }
    groupContent.push(h("ul.no-margin.flex-1-1-auto", rowContent));
  }

  return h(
    ".group.group-m.group-stretch.width-100.height-100.flex.flex-column",
    { ...styles() },
    groupContent
  );
};

export default GroupMaker;
