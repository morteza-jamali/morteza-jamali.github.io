import h from "react-hyperscript";

const GroupComponent: GroupComponent.Function = ({
  array,
  column,
  row,
  ...rest
}) => {
  let groupContent: HyperScript.ReturnType[] = [];

  for (let r = 1; r <= row; r++) {
    let rowContent: HyperScript.ReturnType[] = [];
    for (let c = 1; c <= column; c++) {
      rowContent.push(h("li", [array[0]]));
      array.shift();
    }
    groupContent.push(h("ul.no-margin.flex-1-1-auto", rowContent));
  }

  return h(
    ".group.group-m.group-stretch.flex.flex-column.flex-1-1-auto",
    { ...rest },
    groupContent
  );
};

export default GroupComponent;
