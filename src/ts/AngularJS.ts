import * as angular from 'angular';

export class Angular {
  angular:any;

  constructor() {
    this.angular = angular;
  }

  create(name: string , modules: string[] = []) {
    return this.angular.module(name,modules);
  }
}