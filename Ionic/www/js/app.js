// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','chart.js','angular-svg-round-progressbar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(['$ionicConfigProvider', function($ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])


/*.controller("weightCtrl", function ($scope,$http) {
  $http.get('datasets/profile_default.JSON').success(function (data) {
    $scope.weight_hist = data["weight_hist"];
    for(var i = 0; i < data["weight_hist"].length; i++){
      if (i == (data["weight_hist"].length - 1)) {
        $scope.data = [ data["weight_hist"][i]["Weight"] ];
      }
    }
    $scope.labels = ["Weight_Actual"];
    console.log($scope.data);
  })
})
*/

  .controller("profileCtrl", function ($scope) {

    $scope.labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
    $scope.series = ['Weight'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })

  .controller("activityCtrl", function ($scope) {

    $scope.labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
    $scope.series = ['Sedentary','Mobile','Active','Very_Active'];
    $scope.data = [
      [65, 59, 80, 81, 56, 35, 40],
      [14, 34, 80, 81, 96, 59, 60],
      [65, 59, 38, 81, 56, 25, 20],
      [65, 79, 10, 81, 56, 15, 10]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })

  .controller("performanceCtrl", function ($scope) {

    $scope.labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
    $scope.series = ['Steps','Floors','Distance','Calories'];
    $scope.data = [
      [65, 59, 80, 81, 56, 35, 40],
      [14, 34, 80, 81, 96, 59, 60],
      [65, 59, 38, 81, 56, 25, 20],
      [65, 79, 10, 81, 56, 15, 10]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })

  .controller("sleepCtrl", function ($scope) {

    $scope.labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
    $scope.series = ['Sleeping','Awake','Awakening','In_Bed'];
    $scope.data = [
      [65, 59, 80, 81, 56, 35, 40],
      [14, 34, 80, 81, 96, 59, 60],
      [65, 59, 38, 81, 56, 25, 20],
      [65, 79, 10, 81, 56, 15, 10]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })






