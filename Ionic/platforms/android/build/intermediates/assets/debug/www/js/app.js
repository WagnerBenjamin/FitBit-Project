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
  
  .controller("activityCtrl", function ($scope,$http) {
    $http.get('datasets/activity/activity_mean_years.JSON').success(function (data) {
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
        "Sedentary",
        "Mobile",
        "Active",
        "Very_Active"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("performanceCtrl", function ($scope,$http) {
  $http.get('datasets/performance/performance_means_years.JSON').success(function (data) {
    $scope.data = [
      [data[0]["mean_steps"],data[1]["mean_steps"],data[2]["mean_steps"],data[3]["mean_steps"],data[4]["mean_steps"],data[5]["mean_steps"],data[6]["mean_steps"]],
      [data[0]["mean_floors"],data[1]["mean_floors"],data[2]["mean_floors"],data[3]["mean_floors"],data[4]["mean_floors"],data[5]["mean_floors"],data[6]["mean_floors"]],
      [data[0]["mean_distance"],data[1]["mean_distance"],data[2]["mean_distance"],data[3]["mean_distance"],data[4]["mean_distance"],data[5]["mean_distance"],data[6]["mean_distance"]],
      [data[0]["mean_calories"],data[1]["mean_calories"],data[2]["mean_calories"],data[3]["mean_calories"],data[4]["mean_calories"],data[5]["mean_calories"],data[6]["mean_calories"]]
    ];

    $scope.series = [
      "Steps",
      "Floors",
      "Distance",
      "Calories"
    ];

    $scope.labels = [
      data[0]["Date"],data[1]["Date"],data[2]["Date"],data[3]["Date"],data[4]["Date"],data[5]["Date"],data[6]["Date"]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })
})

  .controller("sleepCtrl",function ($scope,$http) {
  $http.get('datasets/sleep/sleep_means_years.JSON').success(function (data) {
    $scope.data = [
      [data[0]["mean_sleeping"],data[1]["mean_sleeping"],data[2]["mean_sleeping"],data[3]["mean_sleeping"],data[4]["mean_sleeping"],data[5]["mean_sleeping"],data[6]["mean_sleeping"]],
      [data[0]["mean_awake"],data[1]["mean_awake"],data[2]["mean_awake"],data[3]["mean_awake"],data[4]["mean_awake"],data[5]["mean_awake"],data[6]["mean_awake"]],
      [data[0]["mean_awakening"],data[1]["mean_awakening"],data[2]["mean_awakening"],data[3]["mean_awakening"],data[4]["mean_awakening"],data[5]["mean_awakening"],data[6]["mean_awakening"]],
      [data[0]["mean_in_bed"],data[1]["mean_in_bed"],data[2]["mean_in_bed"],data[3]["mean_in_bed"],data[4]["mean_in_bed"],data[5]["mean_in_bed"],data[6]["mean_in_bed"]]
    ];

    $scope.series = [
      "Sleeping",
      "Awake",
      "Awakening",
      "In_Bed"
    ];

    $scope.labels = [
      data[0]["Date"],data[1]["Date"],data[2]["Date"],data[3]["Date"],data[4]["Date"],data[5]["Date"],data[6]["Date"]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })
})



