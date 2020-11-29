import { pragma } from 'html-tsx';

const Home = () => (
  <div class="container-fluid h-100 p-0 text-white">
    <div class="row h-100 no-gutters">
      <div class="col d-flex flex-column justify-content-center align-items-center text-capitalize">
        <h1 class="font-weight-bold">Morteza Jamali</h1>
        <p>Welcome to my website</p>
      </div>
    </div>
  </div>
);

export const HomePage = (() => {
  return { template: Home() }
})();