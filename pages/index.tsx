import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideBar, ISideBarProps, Base, Content } from '../components/.';
import {
  HomeIcon,
  FireIcon,
  BadgeCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';
import { routes } from '../lib/.';

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
  return (
    <Base className="dark bg-gray-500 flex">
      <div className="select-none">
        <SideBar items={sidebarItems} />
      </div>
      <Content>
        <Switch>
          {routes.map(({ path, view }, key) => (
            <Route path={path === '/' ? path : `/${path}`} component={view} />
          ))}
        </Switch>
      </Content>
    </Base>
  );
};

export default Index;
