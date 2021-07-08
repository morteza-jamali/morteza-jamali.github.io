import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { extendProperties } from '@morajlab-website/utilities';
import { Styles } from './Avatar.styles';
import type { IAvatarProps } from './Avatar.types';

export const Avatar: FunctionComponent<IAvatarProps> = ({ src, ...rest }) => {
  const { root } = Styles({});

  return (
    <div {...extendProperties(rest, { className: 'block relative' })} {...root}>
      <Image
        alt="profil"
        src={src}
        className="mx-auto object-cover rounded-lg"
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
