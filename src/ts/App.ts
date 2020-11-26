import 'bootstrap';
import { default as config } from '../../app.config.json';
import { Angular } from './AngularJS';
import { sideNavComponent } from '../components/sideNav';

let app = (new Angular()).create('websiteApp');

app.controller('mainCtrl' , ($scope: any) => {
  $scope.title = config.title;
});

app.directive('sideNav' , () => {
  return {
    template: sideNavComponent()
  }
});