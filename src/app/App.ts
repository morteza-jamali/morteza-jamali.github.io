import 'bootstrap';
import { Angular } from './AngularJS';
import * as ngRoute from 'angular-route';
import { SideNavComponent } from '../components/SideNav';
import { routes } from './Routes';
import { MainController } from '../controllers/MainController';
import { IndexPageComponent } from '../pages/Index';

(() => {
  $('body').attr({
    'data-ng-app': 'websiteApp',
    'data-ng-controller': 'mainController'
  })
  .addClass('h-100 overflow-hidden')
  .append('<index-page-component></index-page-component>');
  $('html').addClass('h-100');
})();

let app = Angular.create('websiteApp', [ngRoute]);

app.setRoutes(routes);

app._controller(MainController);

app.component(IndexPageComponent);
app.component(SideNavComponent);