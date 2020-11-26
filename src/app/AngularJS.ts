import * as angular from 'angular';

class AngularJS {
  angular: any;
  app: any;
  create: any;

  constructor() {
    this.angular = angular;

    this.create = (name: string, modules: any[] = []) => {
      this.app = this.angular.module(name, modules);

      this.app.component = this.component;
      this.app.setRoutes = this.setRoutes;
      this.app._controller = this.controller;

      return this.app;
    };
  }

  component(component: any) {
    let name: string = component.name;
    this.app = this;
    this.app.directive(
      name.replace(name[0], name[0].toLowerCase()),
      component
    );
  }

  setRoutes(routes: any[]) {
    this.app = this;
    this.app.config(($routeProvider: any) => {
      let provider: any = $routeProvider;

      for (let r of routes) {
        provider = provider.when(`/${r.path}`, r.page);
      }
    });
  }

  controller(ctrl: any) {
    let name = ctrl.name;
    this.app = this;
    this.app.controller(
      name.replace(name[0], name[0].toLowerCase()),
      ctrl
    )
  }
}

export let Angular = new AngularJS();