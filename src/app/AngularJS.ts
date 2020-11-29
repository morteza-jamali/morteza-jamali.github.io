import * as angular from 'angular';

class AngularJS {
  angular: any;
  app: any;
  create: any;

  constructor() {
    this.angular = angular;

    this.prepare();

    this.create = (name: string, modules: any[] = []) => {
      this.app = this.angular.module(name, modules);

      this.app._controller = this.controller;
      this.app.component = this.component;
      this.app.setRoutes = this.setRoutes;

      return this.app;
    };
  }

  prepare() {
    $('body').attr({
      'data-ng-app': 'websiteApp',
      'data-ng-controller': 'mainController'
    })
      .addClass('h-100 overflow-hidden')
      .append('<index-page-component></index-page-component>');
    $('html').addClass('h-100');
  }

  component(component: any) {
    let name: string = component.name;
    this.app = this;
    return this.app.directive(
      name.replace(name[0], name[0].toLowerCase()),
      component
    );
  }

  setRoutes(routes: any[]) {
    this.app = this;
    return this.app.config(($routeProvider: any) => {
      let provider: any = $routeProvider;

      for (let r of routes) {
        provider = provider.when(`/${r.path}`, r.page);
      }
    });
  }

  controller(ctrl: any) {
    let name: any = ctrl.name;
    this.app = this;
    return this.app.controller(
      name.replace(name[0], name[0].toLowerCase()),
      ctrl
    );
  }
}

export let Angular = new AngularJS();