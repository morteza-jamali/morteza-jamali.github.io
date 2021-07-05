import React, { FunctionComponent } from 'react';
import { extendProperties } from '@morajlab-website/utilities';
import Styles from './Base.styles';
import type { IBaseProps } from './Base.types';

export const Base: FunctionComponent<IBaseProps> = ({ children, ...rest }) => {
  const { root } = Styles({});

  return (
    <div {...root} {...extendProperties(rest, { className: 'fixed inset-0' })}>
      {children}
    </div>
  );
};

export default Base;
