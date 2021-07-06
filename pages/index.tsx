import React from 'react';
import { SideBar, ISideBarProps, Base, Avatar, Content } from '../components/.';
import {
  HomeIcon,
  FireIcon,
  BadgeCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';

const sidebarItems: ISideBarProps['items'] = [
  {
    text: 'home',
    link: '#!',
    icon: HomeIcon,
    className: 'from-gray-300 via-gray-400 to-gray-500',
  },
  {
    text: 'projects',
    link: '#!',
    icon: FireIcon,
    className: 'from-purple-400 via-pink-500 to-red-500',
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
  return (
    <Base className="dark bg-gray-500 flex">
      <div>
        <SideBar items={sidebarItems} />
      </div>
      <Content>
        <div className="block w-full h-full relative flex flex-col justify-center items-center">
          <div className="flex">
            <h1 className="text-7xl font-extrabold flex flex-col items-end">
              <span>Welcome to</span>
              <span>my blog</span>
            </h1>
            <Avatar
              src="https://avatars.githubusercontent.com/u/42025368?v=4"
              className="w-60 h-60 ml-10 shadow-lg filter grayscale"
            />
          </div>
          <div className="text-3xl font-light">
            <span className="italic">- Morteza Jamali</span>
            <p>I'm a software engineer & full-stack web developer</p>
          </div>
        </div>
      </Content>
    </Base>
  );
};

export default Index;
