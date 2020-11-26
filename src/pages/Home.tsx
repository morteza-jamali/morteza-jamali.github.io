import { pragma } from 'html-tsx';

const Home = () => (
  <h1 class="text-white">This is Home Page !</h1>
);

export const HomePage = (() => {
  return { template: Home() }
})();