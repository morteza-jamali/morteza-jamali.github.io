export const MainController = ($scope: any, $location: any) => {
  $scope.activeLink = $location.path().replace('/' , '');
  
  $scope.goToPage = (path: string) => {
    $location.path(`/${path}`);
    $scope.activeLink = $location.path().replace('/' , '');
  };
};