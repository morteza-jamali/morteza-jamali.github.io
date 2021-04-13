declare module "remark-html" {
  const html: any;
  export default html;
}

declare namespace MORAJ {
  import("react-fela");
  import { CssFunction } from "react-fela";

  export type StyleFunction = (css: CssFunction<{}, {}>, props?: any) => string;
}
