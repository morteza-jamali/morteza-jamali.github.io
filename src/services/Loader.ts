export class Loader {
  $scope: any;

  _(...needle: any) {
    for (let n of needle) {
      if(typeof n == 'object' && n.constructor.name == 'Scope') {
        this.$scope = n;
      }
    }

    return this;
  }

  load(func: any) {
    this.$scope.$on('$viewContentLoaded', () => {
      for (let f in func) {
        func[f]();
      }
    });
  }
}