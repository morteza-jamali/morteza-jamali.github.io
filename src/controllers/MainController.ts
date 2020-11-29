declare const GLOBALS: any;

export const MainController = ($scope: any, $rootScope: any, $location: any) => {
  $rootScope.GLOBALS = GLOBALS;
  $scope.activeLink = $location.path().replace('/', '');
  
  $scope.goToPage = (path: string) => {
    $location.path(`/${path}`);
    $scope.activeLink = $location.path().replace('/', '');
  };
};