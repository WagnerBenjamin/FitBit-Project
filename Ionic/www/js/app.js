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
    $ionicPlatform.ready(function() {
      if(window.isTablet){
        screen.unlockOrientation();
      }else{ screen.lockOrientation('portrait');
      }
    });
})
  .config(['$ionicConfigProvider', function($ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

  .controller("profileDefaultCtrl",function (profileDefault,$scope) {
    profileDefault.getData(function (data) {
      $scope.data = [];
      var $tmp = [];
      for(var i = 0; i <= 6; i++){
        $tmp.push(data["weight_hist"][i]["weight"]);
      }
      $scope.data = [$tmp];
      console.log($scope.data);
      $scope.labels = [
        "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31"
      ];
      $scope.series = [
        "weight"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

      document.getElementById("weightWidget").textContent = data["weight_hist"][6]["weight"];
      document.getElementById("bmiWidget").textContent = data["bmi_actual"][0]["bmi"];
    })
  })

  .controller("profileLastMonthCtrl",function (profileLastMonth,$scope) {
    profileLastMonth.getData(function (data) {

      $scope.data = [];
      var $tmp = [];
      for(var i = 0; i <= 30; i++){
        $tmp.push(data["weight_hist"][i]["weight"]);
      }
      $scope.data = [$tmp];

      /*$scope.data = [
        [data["weight_hist"][0]["weight"], data["weight_hist"][1]["weight"], data["weight_hist"][2]["weight"], data["weight_hist"][3]["weight"], data["weight_hist"][4]["weight"], data["weight_hist"][5]["weight"], data["weight_hist"][6]["weight"],
        data["weight_hist"][7]["weight"], data["weight_hist"][8]["weight"], data["weight_hist"][9]["weight"], data["weight_hist"][10]["weight"], data["weight_hist"][11]["weight"], data["weight_hist"][12]["weight"], data["weight_hist"][13]["weight"],
        data["weight_hist"][14]["weight"], data["weight_hist"][15]["weight"], data["weight_hist"][16]["weight"], data["weight_hist"][17]["weight"], data["weight_hist"][18]["weight"], data["weight_hist"][19]["weight"], data["weight_hist"][20]["weight"], data["weight_hist"][21]["weight"], data["weight_hist"][22]["weight"],
        data["weight_hist"][23]["weight"], data["weight_hist"][24]["weight"], data["weight_hist"][25]["weight"], data["weight_hist"][26]["weight"], data["weight_hist"][27]["weight"], data["weight_hist"][28]["weight"], data["weight_hist"][29]["weight"],
        data["weight_hist"][30]["weight"]]
      ];*/

      $scope.labels = [
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
      ];
      $scope.series = [
        "Weight"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("profileLastYearCtrl",function (profileLastYear,$scope) {
    profileLastYear.getData(function (data) {
      $scope.data = [
        [data["lastyear"][0]["weight"],data["lastyear"][1]["weight"],data["lastyear"][2]["weight"]]
      ];
      $scope.labels = ["2016-01","2016-02","2016-03"];

      $scope.series = [
        "weight"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })


  //activity_default
  .controller("activityDefaultCtrl",function (activityDefault,$scope) {
    activityDefault.getData(function (data) {

     /* $scope.data = [
        [data["activity_hist"][0]["sedentary"], data["activity_hist"][1]["sedentary"], data["activity_hist"][2]["sedentary"], data["activity_hist"][3]["sedentary"], data["activity_hist"][4]["sedentary"], data["activity_hist"][5]["sedentary"], data["activity_hist"][6]["sedentary"]],
        [data["activity_hist"][0]["mobile"], data["activity_hist"][1]["mobile"], data["activity_hist"][2]["mobile"], data["activity_hist"][3]["mobile"], data["activity_hist"][4]["mobile"], data["activity_hist"][5]["mobile"], data["activity_hist"][6]["mobile"]],
        [data["activity_hist"][0]["active"], data["activity_hist"][1]["active"], data["activity_hist"][2]["active"], data["activity_hist"][3]["active"], data["activity_hist"][4]["active"], data["activity_hist"][5]["active"], data["activity_hist"][6]["active"]],
        [data["activity_hist"][0]["veryActive"], data["activity_hist"][1]["veryActive"], data["activity_hist"][2]["veryActive"], data["activity_hist"][3]["veryActive"], data["activity_hist"][4]["veryActive"], data["activity_hist"][5]["veryActive"], data["activity_hist"][6]["veryActive"]]
      ];*/

      $scope.data = [];
      $arrName = ["sedentary", "mobile", "active", "veryActive"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data["activity_hist"][j][$arrName[i]]);
        }
      }
      $scope.data = [$tmp];

      $scope.labels = [
        "2016-03-25", "2016-03-26", "2016-03-27", "2016-03-28", "2016-03-29", "2016-03-30", "2016-03-31"
      ];
      $scope.series = [
        "Sedentary", "Mobile", "Active", "veryActive"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

      document.getElementById("sedentaryWidget").textContent = data["activity_lastday"][0]["sedentary"];
      document.getElementById("mobileWidget").textContent = data["activity_lastday"][0]["mobile"];
      document.getElementById("activeWidget").textContent = data["activity_lastday"][0]["active"];
      document.getElementById("veryActiveWidget").textContent = data["activity_lastday"][0]["veryActive"];
    })
  })

  .controller("activityLastMonthCtrl",function (activityLastMonth,$scope) {
    activityLastMonth.getData(function (data) {
      $scope.data = [
        [data["activity_hist"][0]["sedentary"], data["activity_hist"][1]["sedentary"], data["activity_hist"][2]["sedentary"], data["activity_hist"][3]["sedentary"], data["activity_hist"][4]["sedentary"], data["activity_hist"][5]["sedentary"], data["activity_hist"][6]["sedentary"], data["activity_hist"][7]["sedentary"], data["activity_hist"][8]["sedentary"], data["activity_hist"][9]["sedentary"], data["activity_hist"][10]["sedentary"], data["activity_hist"][11]["sedentary"], data["activity_hist"][12]["sedentary"], data["activity_hist"][13]["sedentary"], data["activity_hist"][14]["sedentary"], data["activity_hist"][15]["sedentary"], data["activity_hist"][16]["sedentary"], data["activity_hist"][17]["sedentary"], data["activity_hist"][18]["sedentary"], data["activity_hist"][19]["sedentary"], data["activity_hist"][20]["sedentary"], data["activity_hist"][21]["sedentary"], data["activity_hist"][22]["sedentary"], data["activity_hist"][23]["sedentary"], data["activity_hist"][24]["sedentary"], data["activity_hist"][25]["sedentary"], data["activity_hist"][26]["sedentary"], data["activity_hist"][27]["sedentary"], data["activity_hist"][28]["sedentary"], data["activity_hist"][29]["sedentary"], data["activity_hist"][30]["sedentary"]],
        [data["activity_hist"][0]["mobile"], data["activity_hist"][1]["mobile"], data["activity_hist"][2]["mobile"], data["activity_hist"][3]["mobile"], data["activity_hist"][4]["mobile"], data["activity_hist"][5]["mobile"], data["activity_hist"][6]["mobile"], data["activity_hist"][7]["mobile"], data["activity_hist"][8]["mobile"], data["activity_hist"][9]["mobile"], data["activity_hist"][10]["mobile"], data["activity_hist"][11]["mobile"], data["activity_hist"][12]["mobile"], data["activity_hist"][13]["mobile"], data["activity_hist"][14]["mobile"], data["activity_hist"][15]["mobile"], data["activity_hist"][16]["mobile"], data["activity_hist"][17]["mobile"], data["activity_hist"][18]["mobile"], data["activity_hist"][19]["mobile"], data["activity_hist"][20]["mobile"], data["activity_hist"][21]["mobile"], data["activity_hist"][22]["mobile"], data["activity_hist"][23]["mobile"], data["activity_hist"][24]["mobile"], data["activity_hist"][25]["mobile"], data["activity_hist"][26]["mobile"], data["activity_hist"][27]["mobile"], data["activity_hist"][28]["mobile"], data["activity_hist"][29]["mobile"], data["activity_hist"][30]["mobile"]],
        [data["activity_hist"][0]["active"], data["activity_hist"][1]["active"], data["activity_hist"][2]["active"], data["activity_hist"][3]["active"], data["activity_hist"][4]["active"], data["activity_hist"][5]["active"], data["activity_hist"][6]["active"], data["activity_hist"][7]["active"], data["activity_hist"][8]["active"], data["activity_hist"][9]["active"], data["activity_hist"][10]["active"], data["activity_hist"][11]["active"], data["activity_hist"][12]["active"], data["activity_hist"][13]["active"], data["activity_hist"][14]["active"], data["activity_hist"][15]["active"], data["activity_hist"][16]["active"], data["activity_hist"][17]["active"], data["activity_hist"][18]["active"], data["activity_hist"][19]["active"], data["activity_hist"][20]["active"], data["activity_hist"][21]["active"], data["activity_hist"][22]["active"], data["activity_hist"][23]["active"], data["activity_hist"][24]["active"], data["activity_hist"][25]["active"], data["activity_hist"][26]["active"], data["activity_hist"][27]["active"], data["activity_hist"][28]["active"], data["activity_hist"][29]["active"], data["activity_hist"][30]["active"]],
        [data["activity_hist"][0]["veryActive"], data["activity_hist"][1]["veryActive"], data["activity_hist"][2]["veryActive"], data["activity_hist"][3]["veryActive"], data["activity_hist"][4]["veryActive"], data["activity_hist"][5]["veryActive"], data["activity_hist"][6]["veryActive"], data["activity_hist"][7]["veryActive"], data["activity_hist"][8]["veryActive"], data["activity_hist"][9]["veryActive"], data["activity_hist"][10]["veryActive"], data["activity_hist"][11]["veryActive"], data["activity_hist"][12]["veryActive"], data["activity_hist"][13]["veryActive"], data["activity_hist"][14]["veryActive"], data["activity_hist"][15]["veryActive"], data["activity_hist"][16]["veryActive"], data["activity_hist"][17]["veryActive"], data["activity_hist"][18]["veryActive"], data["activity_hist"][19]["veryActive"], data["activity_hist"][20]["veryActive"], data["activity_hist"][21]["veryActive"], data["activity_hist"][22]["veryActive"], data["activity_hist"][23]["veryActive"], data["activity_hist"][24]["veryActive"], data["activity_hist"][25]["veryActive"], data["activity_hist"][26]["veryActive"], data["activity_hist"][27]["veryActive"], data["activity_hist"][28]["veryActive"], data["activity_hist"][29]["veryActive"], data["activity_hist"][30]["veryActive"]]];


      /*$scope.data = [];
      $arrName = ["mean_sedentary", "mean_mobile", "mean_active", "mean_very_active"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data[j][$arrName[i]]);
        }
      }
      $scope.data = [$tmp];*/

      $scope.labels = [
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
      ];
      $scope.series = [
        "Sedentary",
        "Mobile",
        "Active",
        "veryActive"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("activityLastYearCtrl",function ($scope,activityLastYear) {
    activityLastYear.getData(function (data) {
      $scope.data = [
        [data["lastyear"][0]["sedentary"],data["lastyear"][1]["sedentary"],data["lastyear"][2]["sedentary"]],
        [data["lastyear"][0]["mobile"],data["lastyear"][1]["mobile"],data["lastyear"][2]["mobile"]],
        [data["lastyear"][0]["active"],data["lastyear"][1]["active"],data["lastyear"][2]["active"]],
        [data["lastyear"][0]["very_active"],data["lastyear"][1]["very_active"],data["lastyear"][2]["very_active"]]
      ];

      $scope.series = [
        "Sedentary",
        "Mobile",
        "Active",
        "veryActive"
      ];

      $scope.labels = [
        data["lastyear"][0]["date"],data["lastyear"][1]["date"],data["lastyear"][2]["date"]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("activityMeanYearsCtrl",function ($scope,activityMeanYears) {
    activityMeanYears.getData(function (data) {
      $scope.data = [
        [data["activity_hist"][0]["sedentary"],data["activity_hist"][1]["sedentary"],data["activity_hist"][2]["sedentary"],data["activity_hist"][3]["sedentary"],data["activity_hist"][4]["sedentary"],data["activity_hist"][5]["sedentary"],data["activity_hist"][6]["sedentary"]],
        [data["activity_hist"][0]["mobile"],data["activity_hist"][1]["mobile"],data["activity_hist"][2]["mobile"],data["activity_hist"][3]["mobile"],data["activity_hist"][4]["mobile"],data["activity_hist"][5]["mobile"],data["activity_hist"][6]["mobile"]],
        [data["activity_hist"][0]["active"],data["activity_hist"][1]["active"],data["activity_hist"][2]["active"],data["activity_hist"][3]["active"],data["activity_hist"][4]["active"],data["activity_hist"][5]["active"],data["activity_hist"][6]["active"]],
        [data["activity_hist"][0]["very_active"],data["activity_hist"][1]["very_active"],data["activity_hist"][2]["very_active"],data["activity_hist"][3]["very_active"],data["activity_hist"][4]["very_active"],data["activity_hist"][5]["very_active"],data["activity_hist"][6]["very_active"]],
      ];

      $scope.series = [
        "Sedentary",
        "Bobile",
        "Active",
        "veryActive"
      ];

      $scope.labels = [
        "2010","2011","2012","2013","2014","2015","2016"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("performanceDefaultCtrl",function ($scope,performanceDefault) {
    performanceDefault.getData(function (data) {

      /*$scope.data = [
        [data["perf_hist"][0]["steps"],data["perf_hist"][1]["steps"],data["perf_hist"][2]["steps"],data["perf_hist"][3]["steps"],data["perf_hist"][4]["steps"],data["perf_hist"][5]["steps"],data["perf_hist"][6]["steps"]],
        [data["perf_hist"][0]["floors"],data["perf_hist"][1]["floors"],data["perf_hist"][2]["floors"],data["perf_hist"][3]["floors"],data["perf_hist"][4]["floors"],data["perf_hist"][5]["floors"],data["perf_hist"][6]["floors"]],
        [data["perf_hist"][0]["distance"],data["perf_hist"][1]["distance"],data["perf_hist"][2]["distance"],data["perf_hist"][3]["distance"],data["perf_hist"][4]["distance"],data["perf_hist"][5]["distance"],data["perf_hist"][6]["distance"]],
        [data["perf_hist"][0]["calories"],data["perf_hist"][1]["calories"],data["perf_hist"][2]["calories"],data["perf_hist"][3]["calories"],data["perf_hist"][4]["calories"],data["perf_hist"][5]["calories"],data["perf_hist"][6]["calories"]]
      ];*/

      $scope.data = [];
      $arrName = ["steps", "floors", "distance", "calories"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data["perf_hist"][j][$arrName[i]]);
        }
      }
      $scope.data = [$tmp];

      $scope.labels = [
        "2016-03-25", "2016-03-26", "2016-03-27", "2016-03-28", "2016-03-29", "2016-03-30", "2016-03-31"
      ];
      $scope.series = [
        "Steps","Floors","Distance","Calories"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

      document.getElementById("stepsWidget").textContent = data["perf_lastday"][0]["steps"];
      document.getElementById("floorsWidget").textContent = data["perf_lastday"][0]["floors"];
      document.getElementById("distanceWidget").textContent = data["perf_lastday"][0]["distance"];
      document.getElementById("caloriesWidget").textContent = data["perf_lastday"][0]["calories"];
    })
  })

  .controller("performanceLastMonthCtrl",function (performanceLastMonth,$scope) {
    performanceLastMonth.getData(function (data) {
      $scope.data = [
        [data["perf_hist"][0]["steps"], data["perf_hist"][1]["steps"], data["perf_hist"][2]["steps"], data["perf_hist"][3]["steps"], data["perf_hist"][4]["steps"], data["perf_hist"][5]["steps"], data["perf_hist"][6]["steps"], data["perf_hist"][7]["steps"], data["perf_hist"][8]["steps"], data["perf_hist"][9]["steps"], data["perf_hist"][10]["steps"], data["perf_hist"][11]["steps"], data["perf_hist"][12]["steps"], data["perf_hist"][13]["steps"], data["perf_hist"][14]["steps"], data["perf_hist"][15]["steps"], data["perf_hist"][16]["steps"], data["perf_hist"][17]["steps"], data["perf_hist"][18]["steps"], data["perf_hist"][19]["steps"], data["perf_hist"][20]["steps"], data["perf_hist"][21]["steps"], data["perf_hist"][22]["steps"], data["perf_hist"][23]["steps"], data["perf_hist"][24]["steps"], data["perf_hist"][25]["steps"], data["perf_hist"][26]["steps"], data["perf_hist"][27]["steps"], data["perf_hist"][28]["steps"], data["perf_hist"][29]["steps"], data["perf_hist"][30]["steps"]],
        [data["perf_hist"][0]["floors"], data["perf_hist"][1]["floors"], data["perf_hist"][2]["floors"], data["perf_hist"][3]["floors"], data["perf_hist"][4]["floors"], data["perf_hist"][5]["floors"], data["perf_hist"][6]["floors"], data["perf_hist"][7]["floors"], data["perf_hist"][8]["floors"], data["perf_hist"][9]["floors"], data["perf_hist"][10]["floors"], data["perf_hist"][11]["floors"], data["perf_hist"][12]["floors"], data["perf_hist"][13]["floors"], data["perf_hist"][14]["floors"], data["perf_hist"][15]["floors"], data["perf_hist"][16]["floors"], data["perf_hist"][17]["floors"], data["perf_hist"][18]["floors"], data["perf_hist"][19]["floors"], data["perf_hist"][20]["floors"], data["perf_hist"][21]["floors"], data["perf_hist"][22]["floors"], data["perf_hist"][23]["floors"], data["perf_hist"][24]["floors"], data["perf_hist"][25]["floors"], data["perf_hist"][26]["floors"], data["perf_hist"][27]["floors"], data["perf_hist"][28]["floors"], data["perf_hist"][29]["floors"], data["perf_hist"][30]["floors"]],
        [data["perf_hist"][0]["distance"], data["perf_hist"][1]["distance"], data["perf_hist"][2]["distance"], data["perf_hist"][3]["distance"], data["perf_hist"][4]["distance"], data["perf_hist"][5]["distance"], data["perf_hist"][6]["distance"], data["perf_hist"][7]["distance"], data["perf_hist"][8]["distance"], data["perf_hist"][9]["distance"], data["perf_hist"][10]["distance"], data["perf_hist"][11]["distance"], data["perf_hist"][12]["distance"], data["perf_hist"][13]["distance"], data["perf_hist"][14]["distance"], data["perf_hist"][15]["distance"], data["perf_hist"][16]["distance"], data["perf_hist"][17]["distance"], data["perf_hist"][18]["distance"], data["perf_hist"][19]["distance"], data["perf_hist"][20]["distance"], data["perf_hist"][21]["distance"], data["perf_hist"][22]["distance"], data["perf_hist"][23]["distance"], data["perf_hist"][24]["distance"], data["perf_hist"][25]["distance"], data["perf_hist"][26]["distance"], data["perf_hist"][27]["distance"], data["perf_hist"][28]["distance"], data["perf_hist"][29]["distance"], data["perf_hist"][30]["distance"]],
        [data["perf_hist"][0]["calories"], data["perf_hist"][1]["calories"], data["perf_hist"][2]["calories"], data["perf_hist"][3]["calories"], data["perf_hist"][4]["calories"], data["perf_hist"][5]["calories"], data["perf_hist"][6]["calories"], data["perf_hist"][7]["calories"], data["perf_hist"][8]["calories"], data["perf_hist"][9]["calories"], data["perf_hist"][10]["calories"], data["perf_hist"][11]["calories"], data["perf_hist"][12]["calories"], data["perf_hist"][13]["calories"], data["perf_hist"][14]["calories"], data["perf_hist"][15]["calories"], data["perf_hist"][16]["calories"], data["perf_hist"][17]["calories"], data["perf_hist"][18]["calories"], data["perf_hist"][19]["calories"], data["perf_hist"][20]["calories"], data["perf_hist"][21]["calories"], data["perf_hist"][22]["calories"], data["perf_hist"][23]["calories"], data["perf_hist"][24]["calories"], data["perf_hist"][25]["calories"], data["perf_hist"][26]["calories"], data["perf_hist"][27]["calories"], data["perf_hist"][28]["calories"], data["perf_hist"][29]["calories"], data["perf_hist"][30]["calories"]]];
      $scope.labels = [
        "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17","03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31"
      ];
      $scope.series = [
        "Steps",
        "Floors",
        "Distance",
        "Calories"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("performanceLastYearCtrl",function ($scope,performanceLastYear) {
    performanceLastYear.getData(function (data) {
      $scope.data = [
        [data["lastyear"][0]["steps"],data["lastyear"][1]["steps"],data["lastyear"][2]["steps"]],
        [data["lastyear"][0]["floors"],data["lastyear"][1]["floors"],data["lastyear"][2]["floors"]],
        [data["lastyear"][0]["distance"],data["lastyear"][1]["distance"],data["lastyear"][2]["distance"]],
        [data["lastyear"][0]["calories"],data["lastyear"][1]["calories"],data["lastyear"][2]["calories"]]
      ];

      $scope.series = [
        "Steps",
        "Floors",
        "Distance",
        "Calories"
      ];

      $scope.labels = [
        data["lastyear"][0]["date"],data["lastyear"][1]["date"],data["lastyear"][2]["date"]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })

  .controller("performanceMeanYearsCtrl",function ($scope,performanceMeanYears) {
    performanceMeanYears.getData(function (data) {
      $scope.data = [
        [data["mean_perf_year"][0]["steps"],data["mean_perf_year"][1]["steps"],data["mean_perf_year"][2]["steps"],data["mean_perf_year"][3]["steps"],data["mean_perf_year"][4]["steps"],data["mean_perf_year"][5]["steps"],data["mean_perf_year"][6]["steps"]],
        [data["mean_perf_year"][0]["floors"],data["mean_perf_year"][1]["floors"],data["mean_perf_year"][2]["floors"],data["mean_perf_year"][3]["floors"],data["mean_perf_year"][4]["floors"],data["mean_perf_year"][5]["floors"],data["mean_perf_year"][6]["floors"]],
        [data["mean_perf_year"][0]["distance"],data["mean_perf_year"][1]["distance"],data["mean_perf_year"][2]["distance"],data["mean_perf_year"][3]["distance"],data["mean_perf_year"][4]["distance"],data["mean_perf_year"][5]["distance"],data["mean_perf_year"][6]["distance"]],
        [data["mean_perf_year"][0]["calories"],data["mean_perf_year"][1]["calories"],data["mean_perf_year"][2]["calories"],data["mean_perf_year"][3]["calories"],data["mean_perf_year"][4]["calories"],data["mean_perf_year"][5]["calories"],data["mean_perf_year"][6]["calories"]],
        ];

        $scope.series = [
          "Steps",
          "Floors",
          "Distance",
          "Calories"
      ];

      $scope.labels = [
        "2010","2011","2012","2013","2014","2015","2016"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })
  //sleep_default

  .controller("SleepDefaultCtrl",function (sleepDefault,$scope) {
    sleepDefault.getData(function (data) {

      $scope.data = [];
      $arrName = ["sleeping", "awake", "awakening", "inBed"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data["sleep_hist"][j][$arrName[i]]);
        }
      }
      $scope.data = [$tmp];

      /*$scope.data = [
        [data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"]],
        [data["sleep_hist"][0]["awake"], data["sleep_hist"][1]["awake"], data["sleep_hist"][2]["awake"], data["sleep_hist"][3]["awake"], data["sleep_hist"][4]["awake"], data["sleep_hist"][5]["awake"], data["sleep_hist"][6]["awake"]],
        [data["sleep_hist"][0]["awakening"], data["sleep_hist"][1]["awakening"], data["sleep_hist"][2]["awakening"], data["sleep_hist"][3]["awakening"], data["sleep_hist"][4]["awakening"], data["sleep_hist"][5]["awakening"], data["sleep_hist"][6]["awakening"]],
        [data["sleep_hist"][0]["inBed"], data["sleep_hist"][1]["inBed"], data["sleep_hist"][2]["inBed"], data["sleep_hist"][3]["inBed"], data["sleep_hist"][4]["inBed"], data["sleep_hist"][5]["inBed"], data["sleep_hist"][6]["inBed"]]
      ];*/
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

    .controller("SleepLastMonthCtrl",function (sleepLastMonth,$scope) {
      sleepLastMonth.getData(function (data) {

        $scope.data = [];
        $arrName = ["sleeping", "awake", "awakening", "inBed"];
        $tmp = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= data.count()-1; j++){
            $tmp.push(data["sleep_hist"][j][$arrName[i]]);
          }
        }
        $scope.data = [$tmp];

        /*$scope.data = [
          [data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][7]["sleeping"], data["sleep_hist"][8]["sleeping"], data["sleep_hist"][9]["sleeping"], data["sleep_hist"][10]["sleeping"], data["sleep_hist"][11]["sleeping"], data["sleep_hist"][12]["sleeping"], data["sleep_hist"][13]["sleeping"], data["sleep_hist"][14]["sleeping"], data["sleep_hist"][15]["sleeping"], data["sleep_hist"][16]["sleeping"], data["sleep_hist"][17]["sleeping"], data["sleep_hist"][18]["sleeping"], data["sleep_hist"][19]["sleeping"], data["sleep_hist"][20]["sleeping"], data["sleep_hist"][21]["sleeping"], data["sleep_hist"][22]["sleeping"], data["sleep_hist"][23]["sleeping"], data["sleep_hist"][24]["sleeping"], data["sleep_hist"][25]["sleeping"], data["sleep_hist"][26]["sleeping"], data["sleep_hist"][27]["sleeping"], data["sleep_hist"][28]["sleeping"], data["sleep_hist"][29]["sleeping"], data["sleep_hist"][30]["sleeping"]],
          [data["sleep_hist"][0]["awake"], data["sleep_hist"][1]["awake"], data["sleep_hist"][2]["awake"], data["sleep_hist"][3]["awake"], data["sleep_hist"][4]["awake"], data["sleep_hist"][5]["awake"], data["sleep_hist"][6]["awake"], data["sleep_hist"][7]["awake"], data["sleep_hist"][8]["awake"], data["sleep_hist"][9]["awake"], data["sleep_hist"][10]["awake"], data["sleep_hist"][11]["awake"], data["sleep_hist"][12]["awake"], data["sleep_hist"][13]["awake"], data["sleep_hist"][14]["awake"], data["sleep_hist"][15]["awake"], data["sleep_hist"][16]["awake"], data["sleep_hist"][17]["awake"], data["sleep_hist"][18]["awake"], data["sleep_hist"][19]["awake"], data["sleep_hist"][20]["awake"], data["sleep_hist"][21]["awake"], data["sleep_hist"][22]["awake"], data["sleep_hist"][23]["awake"], data["sleep_hist"][24]["awake"], data["sleep_hist"][25]["awake"], data["sleep_hist"][26]["awake"], data["sleep_hist"][27]["awake"], data["sleep_hist"][28]["awake"], data["sleep_hist"][29]["awake"], data["sleep_hist"][30]["awake"]],
          [data["sleep_hist"][0]["awakening"], data["sleep_hist"][1]["awakening"], data["sleep_hist"][2]["awakening"], data["sleep_hist"][3]["awakening"], data["sleep_hist"][4]["awakening"], data["sleep_hist"][5]["awakening"], data["sleep_hist"][6]["awakening"], data["sleep_hist"][7]["awakening"], data["sleep_hist"][8]["awakening"], data["sleep_hist"][9]["awakening"], data["sleep_hist"][10]["awakening"], data["sleep_hist"][11]["awakening"], data["sleep_hist"][12]["awakening"], data["sleep_hist"][13]["awakening"], data["sleep_hist"][14]["awakening"], data["sleep_hist"][15]["awakening"], data["sleep_hist"][16]["awakening"], data["sleep_hist"][17]["awakening"], data["sleep_hist"][18]["awakening"], data["sleep_hist"][19]["awakening"], data["sleep_hist"][20]["awakening"], data["sleep_hist"][21]["awakening"], data["sleep_hist"][22]["awakening"], data["sleep_hist"][23]["awakening"], data["sleep_hist"][24]["awakening"], data["sleep_hist"][25]["awakening"], data["sleep_hist"][26]["awakening"], data["sleep_hist"][27]["awakening"], data["sleep_hist"][28]["awakening"], data["sleep_hist"][29]["awakening"], data["sleep_hist"][30]["awakening"]],
          [data["sleep_hist"][0]["inBed"], data["sleep_hist"][1]["inBed"], data["sleep_hist"][2]["inBed"], data["sleep_hist"][3]["inBed"], data["sleep_hist"][4]["inBed"], data["sleep_hist"][5]["inBed"], data["sleep_hist"][6]["inBed"], data["sleep_hist"][7]["inBed"], data["sleep_hist"][8]["inBed"], data["sleep_hist"][9]["inBed"], data["sleep_hist"][10]["inBed"], data["sleep_hist"][11]["inBed"], data["sleep_hist"][12]["inBed"], data["sleep_hist"][13]["inBed"], data["sleep_hist"][14]["inBed"], data["sleep_hist"][15]["inBed"], data["sleep_hist"][16]["inBed"], data["sleep_hist"][17]["inBed"], data["sleep_hist"][18]["inBed"], data["sleep_hist"][19]["inBed"], data["sleep_hist"][20]["inBed"], data["sleep_hist"][21]["inBed"], data["sleep_hist"][22]["inBed"], data["sleep_hist"][23]["inBed"], data["sleep_hist"][24]["inBed"], data["sleep_hist"][25]["inBed"], data["sleep_hist"][26]["inBed"], data["sleep_hist"][27]["inBed"], data["sleep_hist"][28]["inBed"], data["sleep_hist"][29]["inBed"], data["sleep_hist"][30]["inBed"]]];
        */
        $scope.labels = [
          "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ];
        $scope.series = [
          "Sleeping",
          "Awake",
          "Awakening",
          "InBed"
        ];
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };
      })
    })

    .controller("sleepLastYearCtrl",function ($scope,sleepLastYear) {
      sleepLastYear.getData(function (data) {
        /*$scope.data = [
          [data["lastyear"][0]["mean_sleeping"],data["lastyear"][1]["mean_sleeping"],data["lastyear"][2]["mean_sleeping"]],
          [data["lastyear"][0]["mean_awake"],data["lastyear"][1]["mean_awake"],data["lastyear"][2]["mean_awake"]],
          [data["lastyear"][0]["mean_awakening"],data["lastyear"][1]["mean_awakening"],data["lastyear"][2]["mean_awakening"]],
          [data["lastyear"][0]["mean_in_bed"],data["lastyear"][1]["mean_in_bed"],data["lastyear"][2]["mean_in_bed"]]
        ];*/

        $scope.data = [];
        $arrName = ["mean_sleeping", "mean_awake", "mean_awakening", "mean_in_bed"];
        $tmp = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 2; j++){
            $tmp.push(data["lastyear"][j][$arrName[i]]);
          }
        }
        $scope.data = [$tmp];

        /*$scope.data = [
          [data[0]["mean_sleeping"],data[1]["mean_sleeping"],data[2]["mean_sleeping"]],
          [data[0]["mean_awake"],data[1]["mean_awake"],data[2]["mean_awake"]],
          [data[0]["mean_awakening"],data[1]["mean_awakening"],data[2]["mean_awakening"]],
          [data[0]["mean_in_bed"],data[1]["mean_in_bed"],data[2]["mean_in_bed"]]
        ];*/

        $scope.series = [
          "Sleeping",
          "Awake",
          "Awakening",
          "InBed"
        ];

        $scope.labels = [
          data["lastyear"][0]["date"],data["lastyear"][1]["date"],data["lastyear"][2]["date"]
        ];
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };
      })
    })

  //sleep_means_years
  .controller("sleepMeanYearsCtrl",function ($scope,sleepMeanYears) {
    sleepMeanYears.getData(function (data) {
    /*$scope.data = [
      [data["sleep_mean_years"][0]["mean_sleeping"],data["sleep_mean_years"][1]["mean_sleeping"],data["sleep_mean_years"][2]["mean_sleeping"],data["sleep_mean_years"][3]["mean_sleeping"],data["sleep_mean_years"][4]["mean_sleeping"],data["sleep_mean_years"][5]["mean_sleeping"],data["sleep_mean_years"][6]["mean_sleeping"]],
      [data["sleep_mean_years"][0]["mean_awake"],data["sleep_mean_years"][1]["mean_awake"],data["sleep_mean_years"][2]["mean_awake"],data["sleep_mean_years"][3]["mean_awake"],data["sleep_mean_years"][4]["mean_awake"],data["sleep_mean_years"][5]["mean_awake"],data["sleep_mean_years"][6]["mean_awake"]],
      [data["sleep_mean_years"][0]["mean_awakening"],data["sleep_mean_years"][1]["mean_awakening"],data["sleep_mean_years"][2]["mean_awakening"],data["sleep_mean_years"][3]["mean_awakening"],data["sleep_mean_years"][4]["mean_awakening"],data["sleep_mean_years"][5]["mean_awakening"],data["sleep_mean_years"][6]["mean_awakening"]],
      [data["sleep_mean_years"][0]["mean_in_bed"],data["sleep_mean_years"][1]["mean_in_bed"],data["sleep_mean_years"][2]["mean_in_bed"],data["sleep_mean_years"][3]["mean_in_bed"],data["sleep_mean_years"][4]["mean_in_bed"],data["sleep_mean_years"][5]["mean_in_bed"],data["sleep_mean_years"][6]["mean_in_bed"]]
    ];*/

      $scope.data = [];
      $arrName = ["mean_sleeping", "mean_awake", "mean_awakening", "mean_in_bed"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data["sleep_mean_years"][j][$arrName[i]]);
        }
      }
      $scope.data = [$tmp];

    $scope.series = [
      "Sleeping",
      "Awake",
      "Awakening",
      "In_Bed"
    ];

    $scope.labels = [
      data["sleep_mean_years"][0]["date"],data["sleep_mean_years"][1]["date"],data["sleep_mean_years"][2]["date"],data["sleep_mean_years"][3]["date"],data["sleep_mean_years"][4]["date"],data["sleep_mean_years"][5]["date"],data["sleep_mean_years"][6]["date"]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  })
})

  .controller("profileMeanYearsCtrl",function ($scope,profileMeanYears) {
    profileMeanYears.getData(function (data) {
      $scope.data = [
        [data["Mean_weight_years"][0]["weight"],data["Mean_weight_years"][1]["weight"],data["Mean_weight_years"][2]["weight"],data["Mean_weight_years"][3]["weight"],data["Mean_weight_years"][4]["weight"],data["Mean_weight_years"][5]["weight"],data["Mean_weight_years"][6]["weight"]]
      ];

      $scope.series = [
        "Weight"
      ];

      $scope.labels = [
        "2010","2011","2012","2013","2014","2015","2016"
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    })
  })
    .controller("ProfileGraphCtrl",function ($scope) {
      $scope.defaultclicked = true;
      $scope.lastyearclicked = false;
      $scope.lastmonthclicked = false;
      $scope.meanyearsclicked = false;

      $scope.onTouchDefaultGraph = function()
      {
        if(!$scope.defaultclicked){
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.defaultclicked = !$scope.defaultclicked;
        }

      }
      $scope.onTouchLastYearGraph = function()
      {
        if(!$scope.lastyearclicked){
          $scope.defaultclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastyearclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchLastMonthGraph = function()
      {
        if(!$scope.lastmonthclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastmonthclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchMeanYearsGraph = function()
      {
        if(!$scope.meanyearsclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = !$scope.meanyearsclicked;
        }
      }
    })
    .controller("ActivityGraphCtrl",function ($scope) {
      $scope.defaultclicked = true;
      $scope.lastyearclicked = false;
      $scope.lastmonthclicked = false;
      $scope.meanyearsclicked = false;

      $scope.onTouchDefaultGraph = function()
      {
        if(!$scope.defaultclicked){
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.defaultclicked = !$scope.defaultclicked;
        }

      }
      $scope.onTouchLastYearGraph = function()
      {
        if(!$scope.lastyearclicked){
          $scope.defaultclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastyearclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchLastMonthGraph = function()
      {
        if(!$scope.lastmonthclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastmonthclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchMeanYearsGraph = function()
      {
        if(!$scope.meanyearsclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = !$scope.meanyearsclicked;
        }
      }
    })
    .controller("PerfGraphCtrl",function ($scope) {
      $scope.defaultclicked = true;
      $scope.lastyearclicked = false;
      $scope.lastmonthclicked = false;
      $scope.meanyearsclicked = false;

      $scope.onTouchDefaultGraph = function()
      {
        if(!$scope.defaultclicked){
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.defaultclicked = !$scope.defaultclicked;
        }

      }
      $scope.onTouchLastYearGraph = function()
      {
        if(!$scope.lastyearclicked){
          $scope.defaultclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastyearclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchLastMonthGraph = function()
      {
        if(!$scope.lastmonthclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastmonthclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchMeanYearsGraph = function()
      {
        if(!$scope.meanyearsclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = !$scope.meanyearsclicked;
        }
      }
    })
    .controller("SleepGraphCtrl",function ($scope) {
      $scope.defaultclicked = true;
      $scope.lastyearclicked = false;
      $scope.lastmonthclicked = false;
      $scope.meanyearsclicked = false;

      $scope.onTouchDefaultGraph = function()
      {
        if(!$scope.defaultclicked){
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.defaultclicked = !$scope.defaultclicked;
        }

      }
      $scope.onTouchLastYearGraph = function()
      {
        if(!$scope.lastyearclicked){
          $scope.defaultclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastyearclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchLastMonthGraph = function()
      {
        if(!$scope.lastmonthclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.meanyearsclicked = false;
          $scope.lastmonthclicked = !$scope.lastyearclicked;
        }
      }
      $scope.onTouchMeanYearsGraph = function()
      {
        if(!$scope.meanyearsclicked){
          $scope.defaultclicked = false;
          $scope.lastyearclicked = false;
          $scope.lastmonthclicked = false;
          $scope.meanyearsclicked = !$scope.meanyearsclicked;
        }
      }
    });


