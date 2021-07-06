import { HomeView } from '../views';
import type { IRoutesProps } from '../types/.';

export const routes: IRoutesProps[] = [
  {
    path: '/',
    view: HomeView,
    exact: true,
  },
];

export default routes;
