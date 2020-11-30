import { pragma } from 'html-tsx';

const Profile = () => (
  <div class="container-fluid h-100 p-0 text-white">
    <div class="row h-100 no-gutters py-4">
      <div class="col-4 px-4 h-100">
        <div class="card w-100 h-100 bg-blackColor1">
          <div class="profile-image w-100 rounded-circle card-img-top"
            style="background-image:url('{{GLOBALS.PATH.IMAGES}}/morteza.png')"></div>
          <div class="card-body text-center">
            <h4 class="text-capitalize font-weight-bold mb-3" ng-bind="GLOBALS.CONFIG.author.name"></h4>
            <button ng-repeat="s in GLOBALS.CONFIG.social" type="button" data-role="social" data-link="{{s.link}}"
              class="btn btn-link text-white p-1 rounded-circle mr-1">
              <i class="lni {{s.icon}} lni-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-8 px-4 h-100" data-simplebar>
        <h3 class="font-weight-bold text-capitalize">About Me</h3>
        <div class="row">
          <div class="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id ratione esse, autem atque doloremque.
            Aliquid sit molestias saepe? Quibusdam eveniet omnis ad porro accusamus minima
            consequuntur, laborum rem.</p>
          </div>
          <div class="col">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quos. Reiciendis iusto et error, voluptates placeat ipsum id.
              Repellendus aspernatur distinctio quo sequi quasi obcaecati vel id quam perspiciatis ad?</p>
          </div>
        </div>
        <h3 class="font-weight-bold text-capitalize">About Me</h3>
        <div class="row">
          <div class="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id ratione esse, autem atque doloremque.
            Aliquid sit molestias saepe? Quibusdam eveniet omnis ad porro accusamus minima
            consequuntur, laborum rem.</p>
          </div>
          <div class="col">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quos. Reiciendis iusto et error, voluptates placeat ipsum id.
              Repellendus aspernatur distinctio quo sequi quasi obcaecati vel id quam perspiciatis ad?</p>
          </div>
        </div>
        <h3 class="font-weight-bold text-capitalize">About Me</h3>
        <div class="row">
          <div class="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id ratione esse, autem atque doloremque.
            Aliquid sit molestias saepe? Quibusdam eveniet omnis ad porro accusamus minima
            consequuntur, laborum rem.</p>
          </div>
          <div class="col">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quos. Reiciendis iusto et error, voluptates placeat ipsum id.
              Repellendus aspernatur distinctio quo sequi quasi obcaecati vel id quam perspiciatis ad?</p>
          </div>
        </div>
        <h3 class="font-weight-bold text-capitalize" data-simplebar>About Me</h3>
        <div class="row">
          <div class="col">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id ratione esse, autem atque doloremque.
            Aliquid sit molestias saepe? Quibusdam eveniet omnis ad porro accusamus minima
            consequuntur, laborum rem.</p>
          </div>
          <div class="col">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quos. Reiciendis iusto et error, voluptates placeat ipsum id.
              Repellendus aspernatur distinctio quo sequi quasi obcaecati vel id quam perspiciatis ad?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ProfilePage = (() => {
  return {
    template: Profile(),
    controller: 'profileController'
  }
})();