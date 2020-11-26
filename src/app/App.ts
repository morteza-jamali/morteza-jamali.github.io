import 'bootstrap';
import { Angular } from './AngularJS';
import * as ngRoute from 'angular-route';
import { SideNavComponent } from '../components/SideNav';
import { routes } from './Routes';
import { MainController } from '../controllers/MainController';

let app = Angular.create('websiteApp', [ngRoute]);

app.setRoutes(routes);

app._controller(MainController);

app.component(SideNavComponent);