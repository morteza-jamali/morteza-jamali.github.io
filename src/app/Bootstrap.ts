import { IndexPageComponent } from '../pages/Index';
import { SideNavComponent } from '../components/SideNav';

import { MainController } from '../controllers/MainController';

export class Bootstrap {
  components: any[];
  controllers: any[];
  app: any;

  constructor(app: any) {
    this.app = app;
    this.components = [
      IndexPageComponent,
      SideNavComponent
    ];
    this.controllers = [
      MainController
    ];

    this.controller();
    this.component();
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
}