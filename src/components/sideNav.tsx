import { pragma } from 'html-tsx';

class SideNav {
  link: any;
  init: any;
  links: any = null;
  linksList: any = [
    {
      icon: "home",
      text: "home",
      path: ""
    },
    {
      icon: "user",
      text: "about me",
      path: "profile"
    },
    {
      icon: "graduation",
      text: "resume",
      path: "resume"
    },
    {
      icon: "briefcase",
      text: "portfolio",
      path: "portfolio"
    },
    {
      icon: "briefcase",
      text: "portfolio",
      path: "portfolios"
    }
  ];

  constructor() {
    this.link = (config: any) => (
      <li class={`flex-fill ${config === this.linksList[this.linksList.length - 1] ? 'py-4' : 'pt-4'}`}
        data-ng-class={`{'active mr-1': activeLink === '${config.path}'}`}>
        <button
          type="button"
          data-ng-click={`goToPage('${config.path}')`}
          class="btn btn-link text-gray-light justify-content-center d-flex flex-column text-capitalize w-100 h-100 p-0 font-weight-bold">
          <i class={`lni lni-${config.icon} lni-32 mb-1`}></i> {config.text}
        </button>
      </li>
    );

    for (let l of this.linksList) {
      this.links = this.links === null ? this.link(l) : this.links + this.link(l);
    }

    this.init = () => (
      <ul class="sideNav user-select-none list-unstyled h-100 w-100 d-flex flex-column align-self-stretch">
        <div class="overlay h-100"></div>
        {this.links}
      </ul>
    );
  }
}

export const SideNavComponent = () => {
  return { template: (new SideNav()).init() };
};