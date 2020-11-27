import { pragma } from 'html-tsx';

const IndexPage = () => (
  <div class="container-fluid px-0 h-100">
    <div class="row no-gutters h-100">
      <div class="col-1">
        <div class="h-100" side-nav-component></div>
      </div>
      <div class="col-11">
        <div class="website-content h-100 w-100 bg-blackColor2" data-ng-view></div>
      </div>
    </div>
  </div>
);

export const IndexPageComponent = () => {
  return { template: IndexPage() }
};