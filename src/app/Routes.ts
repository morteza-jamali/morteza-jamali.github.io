import { ProfilePage } from '../pages/Profile';
import { HomePage } from '../pages/Home';
import { PortfolioPage } from '../pages/Portfolio';

export const routes: any[] = [
  { path: '', page: HomePage },
  { path: 'portfolio', page: PortfolioPage },
  { path: 'profile', page: ProfilePage }
];