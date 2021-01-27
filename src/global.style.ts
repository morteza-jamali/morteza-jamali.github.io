import "turretcss/dist/turretcss.min.css";
import { css } from "glamor";
import theme from "./Modules/Theme";

const styles = (th: any = theme()) => {
  css.global("html, body, #root", {
    height: "100%",
    width: "100%",
    color: th.palette.textColor,
  });

  return css({
    backgroundColor: th.palette.background,
  });
};

export default styles;
