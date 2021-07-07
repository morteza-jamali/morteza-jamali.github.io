import React, { FunctionComponent } from 'react';
import { extendProperties } from '@morajlab-website/utilities';
import type { IContentProps } from './Content.types';

export const Content: FunctionComponent<IContentProps> = ({ ...rest }) => {
  return (
    <div
      {...extendProperties(rest, {
        className: 'relative flex-1 py-4',
      })}
    />
  );
};

export default Content;
