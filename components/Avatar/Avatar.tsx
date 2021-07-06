import React, { FunctionComponent } from 'react';
import { extendProperties } from '@morajlab-website/utilities';
import type { IAvatarProps } from './Avatar.types';

export const Avatar: FunctionComponent<IAvatarProps> = ({ src, ...rest }) => {
  return (
    <div {...extendProperties(rest, { className: 'block relative' })}>
      <img
        alt="profil"
        src={src}
        className="mx-auto object-cover rounded-lg h-full w-full"
      />
    </div>
  );
};

export default Avatar;
