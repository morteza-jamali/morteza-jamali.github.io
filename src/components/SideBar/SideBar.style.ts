import { css } from "glamor";
import theme from "../../Modules/Theme";

const styles = (th: any = theme()) => ({
  sidebar: css({
    backgroundColor: th.palette.sideBar.background,
    width: "120px",
    borderRadius: "12px",
    "& > ul": {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& > div": {
        "&.actived": {
          "& li::before": {
            backgroundColor: th.palette.primary,
          },
          "& button, & span": {
            color: th.palette.primary,
          },
        },
        "& li": {
          width: "100%",
          padding: 0,
          margin: 0,
          "&::before": {
            right: "-1rem",
          },
          "& button": {
            height: "auto",
            padding: "10px",
            color: "#a4a7b5",
            "&:hover": {
              backgroundColor: "#e9ebee",
            },
            "&:focus, &:active": {
              backgroundColor: "#e0e2e7",
            },
          },
          "& span": {
            marginTop: "5px",
          },
        },
      },
    },
  }),
  icon: css({}),
});

export default styles;
