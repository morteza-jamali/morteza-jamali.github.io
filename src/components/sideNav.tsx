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
      path: "portfolio"
    }
  ];

  constructor() {
    this.link = (config: any) => (
      <li class="flex-fill pt-4">
        <button type="button" data-ng-click={`goToPage('${config.path}')`}
          class="btn btn-link text-gray-light justify-content-center d-flex flex-column text-capitalize mx-auto p-0">
          <i class={`lni lni-${config.icon} lni-32 mb-1`}></i> {config.text}
        </button>
      </li>
    );

    for(let l of this.linksList) {
      this.links = this.links === null ? this.link(l) : this.links + this.link(l);
    }

    this.init = () => (
      <ul class="sideNav user-select-none list-unstyled h-100 w-100 bg-blackColor1 d-flex flex-column align-self-stretch py-4">
        {this.links}
      </ul>
    );
  }
}

export const SideNavComponent = () => {
  return {
    template: (new SideNav()).init()
  };
};