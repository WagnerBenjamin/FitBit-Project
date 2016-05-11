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

  .controller("profileLastYearCtrl",function (profileLastYear,$scope) {
    profileLastYear.getData(function (data) {
      $scope.data = [
        data["lastyear"][0]["weight"],data["lastyear"][1]["weight"],data["lastyear"][3]["weight"]
      ];
      $scope.labels = ["2016-01","2016-02","2016-03"];

      $scope.series = [
        "Weight"
      ];
    })
  })


  //activity_default
  .controller("activityDefaultCtrl",function (activityDefault,$scope) {
    activityDefault.getData(function (data) {

      $scope.data = [
        [data["activity_hist"][0]["Sedentary"], data["activity_hist"][1]["Sedentary"], data["activity_hist"][2]["Sedentary"], data["activity_hist"][3]["Sedentary"], data["activity_hist"][4]["Sedentary"], data["activity_hist"][5]["Sedentary"], data["activity_hist"][6]["Sedentary"]],
        [data["activity_hist"][0]["Mobile"], data["activity_hist"][1]["Mobile"], data["activity_hist"][2]["Mobile"], data["activity_hist"][3]["Mobile"], data["activity_hist"][4]["Mobile"], data["activity_hist"][5]["Mobile"], data["activity_hist"][6]["Mobile"]],
        [data["activity_hist"][0]["Active"], data["activity_hist"][1]["Active"], data["activity_hist"][2]["Active"], data["activity_hist"][3]["Active"], data["activity_hist"][4]["Active"], data["activity_hist"][5]["Active"], data["activity_hist"][6]["Active"]],
        [data["activity_hist"][0]["Very_Active"], data["activity_hist"][1]["Very_Active"], data["activity_hist"][2]["Very_Active"], data["activity_hist"][3]["Very_Active"], data["activity_hist"][4]["Very_Active"], data["activity_hist"][5]["Very_Active"], data["activity_hist"][6]["Very_Active"]]
      ];
      $scope.labels = [
        "2016-03-25", "2016-03-26", "2016-03-27", "2016-03-28", "2016-03-29", "2016-03-30", "2016-03-31"
      ];
      $scope.series = [
        "Sedentary", "Mobile", "Active", "Very_Active"
      ];
    })
  })
  //activity_means_years
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

  //performance_means_years
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

  .controller("performanceDefaultCtrl",function ($scope,performanceDefault) {
    performanceDefault.getData(function (data) {
      $scope.data = [
        [data[0]["steps"],data[1]["steps"],data[2]["steps"],data[3]["steps"],data[4]["steps"],data[5]["steps"],data[6]["steps"],data[7]["steps"]],
        [data[0]["floors"],data[1]["floors"],data[2]["floors"],data[3]["floors"],data[4]["floors"],data[5]["floors"],data[6]["floors"],data[7]["floors"]],
        [data[0]["distance"],data[1]["distance"],data[2]["distance"],data[3]["distance"],data[4]["distance"],data[5]["distance"],data[6]["distance"],data[7]["distance"]],
        [data[0]["calories"],data[1]["calories"],data[2]["calories"],data[3]["calories"],data[4]["calories"],data[5]["calories"],data[6]["calories"],data[7]["calories"]]
      ];
      $scope.labels = [
        "2016-03-25", "2016-03-26", "2016-03-27", "2016-03-28", "2016-03-29", "2016-03-30", "2016-03-31"
      ];
      $scope.series = [
        "Steps","Floors","Distance","Calories"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })
  //sleep_default

  .controller("SleepDefaultCtrl",function (sleepDefault,$scope) {
    sleepDefault.getData(function (data) {
      $scope.data = [
        [data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"]],
        [data["sleep_hist"][0]["awake"], data["sleep_hist"][1]["awake"], data["sleep_hist"][2]["awake"], data["sleep_hist"][3]["awake"], data["sleep_hist"][4]["awake"], data["sleep_hist"][5]["awake"], data["sleep_hist"][6]["awake"]],
        [data["sleep_hist"][0]["awakening"], data["sleep_hist"][1]["awakening"], data["sleep_hist"][2]["awakening"], data["sleep_hist"][3]["awakening"], data["sleep_hist"][4]["awakening"], data["sleep_hist"][5]["awakening"], data["sleep_hist"][6]["awakening"]],
        [data["sleep_hist"][0]["inBed"], data["sleep_hist"][1]["inBed"], data["sleep_hist"][2]["inBed"], data["sleep_hist"][3]["inBed"], data["sleep_hist"][4]["inBed"], data["sleep_hist"][5]["inBed"], data["sleep_hist"][6]["inBed"]]
      ];
      $scope.labels = [
        "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31"
      ];
      $scope.series = [
        "Sleeping",
        "Awake",
        "Awakening",
        "In_Bed"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      document.getElementById("sleepingWidget").textContent = data["sleep_lastday"][0]["sleeping"];
      document.getElementById("awakeWidget").textContent = data["sleep_lastday"][0]["awake"];
      document.getElementById("awakeningWidget").textContent = data["sleep_lastday"][0]["awakening"];
      document.getElementById("inBedWidget").textContent = data["sleep_lastday"][0]["inBed"];
    })
  })

    .controller("SleepLastMonthCtrl",function (sleepDefault,$scope) {
      sleepDefault.getData(function (data) {
        $scope.data = [
          [data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][6]["sleeping"]],
          [data["sleep_hist"][0]["awake"], data["sleep_hist"][1]["awake"], data["sleep_hist"][2]["awake"], data["sleep_hist"][3]["awake"], data["sleep_hist"][4]["awake"], data["sleep_hist"][5]["awake"], data["sleep_hist"][6]["awake"]],
          [data["sleep_hist"][0]["awakening"], data["sleep_hist"][1]["awakening"], data["sleep_hist"][2]["awakening"], data["sleep_hist"][3]["awakening"], data["sleep_hist"][4]["awakening"], data["sleep_hist"][5]["awakening"], data["sleep_hist"][6]["awakening"]],
          [data["sleep_hist"][0]["inBed"], data["sleep_hist"][1]["inBed"], data["sleep_hist"][2]["inBed"], data["sleep_hist"][3]["inBed"], data["sleep_hist"][4]["inBed"], data["sleep_hist"][5]["inBed"], data["sleep_hist"][6]["inBed"]]
        ];
        $scope.labels = [
          "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17","03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31"
        ];
        $scope.series = [
          "Sleeping",
          "Awake",
          "Awakening",
          "In_Bed"
        ];
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };
      })
    })

    .controller("sleepLastYearCtrl",function ($scope,$http) {
      sleepLastYear.getData(function (data) {
        $scope.data = [
          [data[0]["mean_sleeping"],data[1]["mean_sleeping"],data[2]["mean_sleeping"]],
          [data[0]["mean_awake"],data[1]["mean_awake"],data[2]["mean_awake"]],
          [data[0]["mean_awakening"],data[1]["mean_awakening"],data[2]["mean_awakening"]],
          [data[0]["mean_in_bed"],data[1]["mean_in_bed"],data[2]["mean_in_bed"]]
        ];

        $scope.series = [
          "Sleeping",
          "Awake",
          "Awakening",
          "In_Bed"
        ];

        $scope.labels = [
          data[0]["Date"],data[1]["Date"],data[2]["Date"]
        ];
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };
      })
    })

  //sleep_means_years
  .controller("sleepMeanYearsCtrl",function ($scope,$http) {
    sleepMeanYears.getData(function (data) {
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
});


