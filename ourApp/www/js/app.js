// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','chart.js'])

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

.controller("weightCtrl", [function ($scope,profile) {
  $scope.profile = profile.data;
  $scope.weight_hist = $scope.profile["weight_hist"];
  for(var i = 0; i < $scope.profile["weight_hist"].length; i++){
    if (i == ($scope.profile["weight_hist"].length - 1)) {
      $scope.data = [ $scope.profile["weight_hist"][i]["Weight"] ];
     }
   }
  $scope.labels = ["Weight_Actual"];
  console.log($scope.data);
 }])



