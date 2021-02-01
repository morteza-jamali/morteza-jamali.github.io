import { css } from "glamor";
import theme from "../../Modules/Theme";

const styles = (th: any = theme()) => ({
  intro: css({
    "& ul:first-child": {
      paddingRight: "20px",
      paddingLeft: "20px",
      maxWidth: "60%",
    },
    "& ul:nth-child(2)": {
      paddingRight: "50px",
      paddingLeft: "50px",
      alignItems: "flex-start",
      flexBasis: "0",
      maxWidth: "40%",
      flexGrow: "1",
      "& button": {
        backgroundColor: th.palette.brandSecond,
        borderColor: th.palette.brandSecond,
        color: th.palette.textColor,
      },
    },
  }),
  books: css({
    "& ul": {
      alignItems: "stretch",
      maxHeight: "50%",
      "& li": {
        alignItems: "stretch",
        maxHeight: "100%",
      },
    },
  }),
});

export default styles;
