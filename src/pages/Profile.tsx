import { pragma } from 'html-tsx';

const Profile = () => (
  <h1 class="text-white">This is Profile Page !</h1>
);

export const ProfilePage = (() => {
  return { template: Profile() }
})();