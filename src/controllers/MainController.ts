import { default as config } from '../../app.config.json';

export const MainController = ($scope: any, $location: any) => {
  $scope.title = config.title;
  $scope.activeLink = $location.path().replace('/' , '');
  
  $scope.goToPage = (path: string) => {
    $location.path(`/${path}`);
    $scope.activeLink = $location.path().replace('/' , '');
  };
};