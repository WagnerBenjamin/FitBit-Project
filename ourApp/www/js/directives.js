angular.module('app.directives', [])

.directive('blankDirective', [function(){

}]);

angular.module("myapp", ["chart.js"]).controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});
