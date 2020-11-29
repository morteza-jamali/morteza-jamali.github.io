import 'bootstrap';
import { Angular } from './AngularJS';
import { Modules } from './Modules';
import { routes } from './Routes';
import { Bootstrap } from './Bootstrap';

new Bootstrap(
  Angular
    .create('websiteApp', Modules)
    .setRoutes(routes)
);