import { IndexPageComponent } from '../pages/Index';
import { SideNavComponent } from '../components/SideNav';

import { MainController } from '../controllers/MainController';
import { ProfileController } from '../controllers/ProfileController';

import { Loader } from '../services/Loader';
import { ScrollBar } from '../services/ScrollBar';

export class Bootstrap {
  components: any[];
  controllers: any[];
  services: any[];
  app: any;

  constructor(app: any) {
    this.app = app;
    this.components = [
      IndexPageComponent,
      SideNavComponent
    ];
    this.controllers = [
      MainController,
      ProfileController
    ];
    this.services = [
      Loader,
      ScrollBar
    ];

    this.controller();
    this.component();
    this.service();
  }

  controller() {
    for (let c of this.controllers) {
      this.app._controller(c);
    }
  }

  component() {
    for (let c of this.components) {
      this.app.component(c);
    }
  }

  service() {
    for (let s of this.services) {
      this.app.service(`$$${s.name}`, s);
    }
  }
}