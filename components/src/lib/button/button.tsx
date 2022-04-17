import { BGColors } from '@workspace/morteza-jamali/blog/components/styles/colors';
import { merger } from '@morajlab/npm.react.utils.merge_props';
import Styles from './button.styles';
import type { ButtonComponent } from './button.types';

export const Button: ButtonComponent = ({
  text,
  children,
  bgColor = BGColors.GREY,
  ...rest
}) => {
  const { root } = Styles();
  let props = merger.mergeProps(rest, {
    className: `w3-button ${root} w3-${bgColor}`,
  });

  return <button {...props}>{text ? text : children}</button>;
};

export default Button;
