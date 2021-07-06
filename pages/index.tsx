import React from 'react';
import { css } from 'glamor';
import { SideBar, ISideBarProps, Base, Avatar, Content } from '../components/.';
import {
  HomeIcon,
  FireIcon,
  BadgeCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';
import tile1 from '../public/tile1.svg';

const Styles = ({}) => ({
  root: css({}),
  avatar: css({
    '& img': {
      filter: 'grayscale(100%)',
    },
    '&:before': {
      content: '""',
      backgroundImage: `url(${tile1.src})`,
      position: 'absolute',
      inset: 0,
      margin: '-2rem',
    },
  }),
});

const sidebarItems: ISideBarProps['items'] = [
  {
    text: 'home',
    link: '#!',
    icon: HomeIcon,
    className: 'from-purple-400 via-pink-500 to-red-500',
  },
  {
    text: 'projects',
    link: '#!',
    icon: FireIcon,
    className: 'from-gray-300 via-gray-400 to-gray-500',
  },
  {
    text: 'status',
    link: '#!',
    icon: BadgeCheckIcon,
    className: 'from-gray-300 via-gray-400 to-gray-500',
  },
  {
    text: 'Learning lab',
    link: '#!',
    icon: AcademicCapIcon,
    className: 'from-gray-300 via-gray-400 to-gray-500',
  },
];

export const Index = () => {
  const { root, avatar } = Styles({});

  return (
    <Base className="dark bg-gray-500 flex" {...root}>
      <div className="select-none">
        <SideBar items={sidebarItems} />
      </div>
      <Content>
        <div className="block w-full h-full relative flex flex-col justify-center items-center select-none">
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
      </Content>
    </Base>
  );
};

export default Index;
