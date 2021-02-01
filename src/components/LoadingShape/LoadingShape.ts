import h from "react-hyperscript";
import { LoadingShape as RainBowLoadingShape } from "react-rainbow-components";

const LoadingShape: LoadingShapeComponent.Function = ({
  variant,
  shape,
  ...rest
}) => h(RainBowLoadingShape, { variant, shape, ...rest });

export default LoadingShape;
