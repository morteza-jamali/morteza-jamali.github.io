import { pragma } from 'html-tsx';

declare let PATH: any;

const Home = () => (
  <div class="container-fluid h-100 p-0 text-white">
    <div class="row h-100 no-gutters">
      <div class="col-4 p-4">
        <div class="card w-100 h-100 bg-blackColor1">
          <div class="profile-image w-100 rounded-circle card-img-top" style={`background-image:url('${PATH.IMAGES}/morteza.png')`}></div>
          <div class="card-body text-center">
            <h4 class="text-capitalize font-weight-bold">Morteza Jamali</h4>
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

export const HomePage = (() => {
  return { template: Home() }
})();