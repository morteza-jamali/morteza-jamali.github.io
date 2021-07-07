import {
  HomeIcon,
  FireIcon,
  BadgeCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';
import type { ISideBarProps } from '../components/.';

export const items: ISideBarProps['items'] = [
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

export default items;
