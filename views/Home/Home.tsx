import React, { FunctionComponent } from 'react';
import { Avatar } from '../../components/.';
import { extendProperties } from '@morajlab-website/utilities';
import { Styles } from './Home.styles';
import tile1 from '../public/tile1.svg';
import type { IHomeViewProps } from './Home.types';

export const HomeView: FunctionComponent<IHomeViewProps> = ({ ...rest }) => {
  const { root, avatar } = Styles({ tileURL: tile1.src });

  return (
    <div
      {...root}
      {...extendProperties(rest, {
        className:
          'block w-full h-full relative flex flex-col justify-center items-center select-none',
      })}
    >
      <div className="flex">
        <h1 className="text-7xl font-extrabold flex flex-col items-end">
          <span>Welcome to</span>
          <span>my blog</span>
        </h1>
        <Avatar
          src="https://avatars.githubusercontent.com/u/42025368?v=4"
          className="w-60 h-60 ml-10 shadow-lg"
          {...avatar}
        />
      </div>
      <div className="text-3xl mt-2">
        <span className="italic bg-gray-100 p-2">Morteza Jamali</span>
        <p className="font-light mt-3">
          I'm a software engineer & full-stack web developer
        </p>
      </div>
    </div>
  );
};

export default HomeView;
