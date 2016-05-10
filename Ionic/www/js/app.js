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

  .controller("profileCtrl",function ($scope,$http) {
    $http.get('datasets/profile/profile_means_weight.JSON').success(function (data) {
      console.log($scope.data);
      $scope.data = [
        data["Mean_weight_years"][0]["Mean_Weight"],
        data["Mean_weight_years"][1]["Mean_Weight"],
        data["Mean_weight_years"][2]["Mean_Weight"],
        data["Mean_weight_years"][3]["Mean_Weight"],
        data["Mean_weight_years"][4]["Mean_Weight"],
        data["Mean_weight_years"][5]["Mean_Weight"],
        data["Mean_weight_years"][6]["Mean_Weight"]
      ];

      $scope.series = ["Weight"];

      $scope.labels = [
        data["Mean_weight_years"][0]["Year"],
        data["Mean_weight_years"][1]["Year"],
        data["Mean_weight_years"][2]["Year"],
        data["Mean_weight_years"][3]["Year"],
        data["Mean_weight_years"][4]["Year"],
        data["Mean_weight_years"][5]["Year"],
        data["Mean_weight_years"][6]["Year"]
      ];

      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })


  .controller("activityCtrl", function ($scope,$http) {
    $http.get('datasets/activity/activity_mean_years.JSON').success(function (data) {
      console.log($scope.data);
      $scope.data = [
        [data[0]["mean_sedentary"],data[1]["mean_sedentary"],data[2]["mean_sedentary"],data[3]["mean_sedentary"],data[4]["mean_sedentary"],data[5]["mean_sedentary"],data[6]["mean_sedentary"]],
        [data[0]["mean_mobile"],data[1]["mean_mobile"],data[2]["mean_mobile"],data[3]["mean_mobile"],data[4]["mean_mobile"],data[5]["mean_mobile"],data[6]["mean_mobile"]],
        [data[0]["mean_active"],data[1]["mean_active"],data[2]["mean_active"],data[3]["mean_active"],data[4]["mean_active"],data[5]["mean_active"],data[6]["mean_active"]],
        [data[0]["mean_very_active"],data[1]["mean_very_active"],data[2]["mean_very_active"],data[3]["mean_very_active"],data[4]["mean_very_active"],data[5]["mean_very_active"],data[6]["mean_very_active"]]
        ];
      $scope.labels = [
        data[0]["years"],data[1]["years"],data[2]["years"],data[3]["years"],data[4]["years"],data[5]["years"],data[6]["years"]
      ];
      $scope.series = [
        ["Sedentary"],
        ["Mobile"],
        ["Active"],
        ["Very_Active"]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })

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






