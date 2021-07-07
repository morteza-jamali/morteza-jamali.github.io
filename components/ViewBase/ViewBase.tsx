import React, { FunctionComponent } from 'react';
import { extendProperties } from '@morajlab-website/utilities';
import { Base, SideBar, Content } from '../.';
import { items } from '../../lib/.';
import { Styles } from './ViewBase.styles';
import type { IViewBaseProps } from './ViewBase.types';

export const ViewBase: FunctionComponent<IViewBaseProps> = ({
  children,
  ...rest
}) => {
  const { root } = Styles({});

  return (
    <Base
      {...extendProperties(rest, { className: 'dark bg-gray-500 flex' })}
      {...root}
    >
      <div className="select-none">
        <SideBar items={items} />
      </div>
      <Content>{children}</Content>
    </Base>
  );
};

export default ViewBase;
