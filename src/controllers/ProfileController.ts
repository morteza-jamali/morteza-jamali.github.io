export const ProfileController = ($scope: any, $$Loader: any, $$ScrollBar: any) => {
  $$Loader._($scope).load([
    () => {
      $('[data-simplebar]').each((i, e) => {
        $$ScrollBar._($(e)[0]);
      });
    }
  ]);
};