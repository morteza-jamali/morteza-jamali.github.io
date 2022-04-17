import { Bare } from '@workspace/morteza-jamali/blog/components';
import { BGColors } from '@workspace/morteza-jamali/blog/components/styles/colors';
import { merger } from '@morajlab/npm.react.utils.merge_props';
import { Type } from './alert.types';
import type { AlertComponent } from './alert.types';

export const Alert: AlertComponent = ({ type = Type.INFO, ...rest }) => {
  const color = {
    [Type.ERROR]: { main: BGColors.RED, pale: BGColors.PALE_RED },
    [Type.SUCCESS]: { main: BGColors.GREEN, pale: BGColors.PALE_GREEN },
    [Type.WARN]: { main: BGColors.YELLOW, pale: BGColors.PALE_YELLOW },
    [Type.INFO]: { main: BGColors.GREY, pale: BGColors.LIGHT_GREY },
  };

  return (
    <Bare
      {...merger.merge(rest, {
        className: `w3-panel w3-leftbar w3-padding-16 w3-border-${color[type].main} w3-${color[type].pale}`,
      })}
    />
  );
};

export default Alert;
