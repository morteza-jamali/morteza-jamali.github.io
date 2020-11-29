import { pragma } from 'html-tsx';

const Portfolio = () => (
  <div class="container-fluid h-100 p-0 text-white">
    <div class="row h-100 no-gutters">
      <div class="col-4 p-4">
        <div class="card w-100 h-100 bg-blackColor1">
          <div class="profile-image w-100 rounded-circle card-img-top"
            style="background-image:url('{{GLOBALS.PATH.IMAGES}}/morteza.png')"></div>
          <div class="card-body text-center">
            <h4 class="text-capitalize font-weight-bold" ng-bind="GLOBALS.CONFIG.author.name"></h4>
            <button ng-repeat="s in GLOBALS.CONFIG.social" type="button" data-role="social" data-link="{{s.link}}"
              class="btn btn-link text-white p-1 rounded-circle mr-1">
              <i class="lni {{s.icon}} lni-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-8 d-flex flex-column justify-content-center align-items-center text-capitalize">
        <h1 class="font-weight-bold">Morteza Jamali</h1>
        <p>Welcome to my website</p>
      </div>
    </div>
  </div>
);

export const PortfolioPage = (() => {
  return { template: Portfolio() }
})();