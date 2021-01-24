import "turretcss/dist/turretcss.min.css";
import { css } from "glamor";

const styles = () =>
  css.global("html, body, #root", { height: "100%", width: "100%" });

export default styles;
