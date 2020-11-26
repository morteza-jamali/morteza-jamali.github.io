import { pragma } from 'html-tsx';

class sideNav {
  link: any;
  init: any;
  links: any = null;
  linksList: any = [
    {
      icon: "home",
      text: "home"
    },
    {
      icon: "user",
      text: "about me"
    },
    {
      icon: "graduation",
      text: "resume"
    },
    {
      icon: "briefcase",
      text: "portfolio"
    },
    {
      icon: "briefcase",
      text: "portfolio"
    }
  ];

  constructor() {
    this.link = (config: any) => (
      <li class="flex-fill">
        <button type="button" class="btn btn-link text-white justify-content-center d-flex flex-column text-capitalize">
          <i class={`lni lni-${config.icon} lni-32 mb-1`}></i> {config.text}
        </button>
      </li>
    );

    for(let l of this.linksList) {
      this.links = this.links === null ? this.link(l) : this.links + this.link(l);
    }

    this.init = () => (
      <ul class="sideNav list-unstyled h-100 w-100 bg-blackColor1 d-flex flex-column align-items-center">
        {this.links}
      </ul>
    );
  }
}

let sideNavComponent = (new sideNav()).init;

export { sideNavComponent };