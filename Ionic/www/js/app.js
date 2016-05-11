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
      console.log(data["weight_hist"][0]["weight"]);

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

      $scope.data = [];
      $arrName = ["Sedentary", "Mobile", "Active", "Very_Active"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data["activity_hist"][j][$arrName[i]]);
        }
      }
      $scope.data = $tmp;

      /*$scope.data = [
        [data["activity_hist"][0]["Sedentary"], data["activity_hist"][1]["Sedentary"], data["activity_hist"][2]["Sedentary"], data["activity_hist"][3]["Sedentary"], data["activity_hist"][4]["Sedentary"], data["activity_hist"][5]["Sedentary"], data["activity_hist"][6]["Sedentary"]],
        [data["activity_hist"][0]["Mobile"], data["activity_hist"][1]["Mobile"], data["activity_hist"][2]["Mobile"], data["activity_hist"][3]["Mobile"], data["activity_hist"][4]["Mobile"], data["activity_hist"][5]["Mobile"], data["activity_hist"][6]["Mobile"]],
        [data["activity_hist"][0]["Active"], data["activity_hist"][1]["Active"], data["activity_hist"][2]["Active"], data["activity_hist"][3]["Active"], data["activity_hist"][4]["Active"], data["activity_hist"][5]["Active"], data["activity_hist"][6]["Active"]],
        [data["activity_hist"][0]["Very_Active"], data["activity_hist"][1]["Very_Active"], data["activity_hist"][2]["Very_Active"], data["activity_hist"][3]["Very_Active"], data["activity_hist"][4]["Very_Active"], data["activity_hist"][5]["Very_Active"], data["activity_hist"][6]["Very_Active"]]
      ];*/
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

      $scope.data = [];
      $arrName = ["mean_sedentary", "mean_mobile", "mean_active", "mean_very_active"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data[j][$arrName[i]]);
        }
      }
      $scope.data = $tmp;

      /*$scope.data = [
        [data[0]["mean_sedentary"],data[1]["mean_sedentary"],data[2]["mean_sedentary"],data[3]["mean_sedentary"],data[4]["mean_sedentary"],data[5]["mean_sedentary"],data[6]["mean_sedentary"]],
        [data[0]["mean_mobile"],data[1]["mean_mobile"],data[2]["mean_mobile"],data[3]["mean_mobile"],data[4]["mean_mobile"],data[5]["mean_mobile"],data[6]["mean_mobile"]],
        [data[0]["mean_active"],data[1]["mean_active"],data[2]["mean_active"],data[3]["mean_active"],data[4]["mean_active"],data[5]["mean_active"],data[6]["mean_active"]],
        [data[0]["mean_very_active"],data[1]["mean_very_active"],data[2]["mean_very_active"],data[3]["mean_very_active"],data[4]["mean_very_active"],data[5]["mean_very_active"],data[6]["mean_very_active"]]
        ];*/
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

    $scope.data = [];
    $arrName = ["mean_step", "mean_floors", "mean_distance", "mean_calories"];
    $tmp = [];
    for(var i = 0; i < 4; i++){
      for(var j = 0; j <= 6; j++){
        $tmp.push(data[j][$arrName[i]]);
      }
    }
    $scope.data = $tmp;

    /*$scope.data = [
      [data[0]["mean_steps"],data[1]["mean_steps"],data[2]["mean_steps"],data[3]["mean_steps"],data[4]["mean_steps"],data[5]["mean_steps"],data[6]["mean_steps"]],
      [data[0]["mean_floors"],data[1]["mean_floors"],data[2]["mean_floors"],data[3]["mean_floors"],data[4]["mean_floors"],data[5]["mean_floors"],data[6]["mean_floors"]],
      [data[0]["mean_distance"],data[1]["mean_distance"],data[2]["mean_distance"],data[3]["mean_distance"],data[4]["mean_distance"],data[5]["mean_distance"],data[6]["mean_distance"]],
      [data[0]["mean_calories"],data[1]["mean_calories"],data[2]["mean_calories"],data[3]["mean_calories"],data[4]["mean_calories"],data[5]["mean_calories"],data[6]["mean_calories"]]
    ];*/

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

      $scope.data = [];
      $arrName = ["steps", "floors", "distance", "calories"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data[j][$arrName[i]]);
        }
      }
      $scope.data = $tmp;

      /*$scope.data = [
        [data[0]["steps"],data[1]["steps"],data[2]["steps"],data[3]["steps"],data[4]["steps"],data[5]["steps"],data[6]["steps"],data[7]["steps"]],
        [data[0]["floors"],data[1]["floors"],data[2]["floors"],data[3]["floors"],data[4]["floors"],data[5]["floors"],data[6]["floors"],data[7]["floors"]],
        [data[0]["distance"],data[1]["distance"],data[2]["distance"],data[3]["distance"],data[4]["distance"],data[5]["distance"],data[6]["distance"],data[7]["distance"]],
        [data[0]["calories"],data[1]["calories"],data[2]["calories"],data[3]["calories"],data[4]["calories"],data[5]["calories"],data[6]["calories"],data[7]["calories"]]
      ];*/
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

      $scope.data = [];
      $arrName = ["sleeping", "awake", "awakening", "inBed"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data["sleep_hist"][j][$arrName[i]]);
        }
      }
      $scope.data = $tmp;

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

    .controller("SleepLastMonthCtrl",function (sleepDefault,$scope) {
      sleepDefault.getData(function (data) {

        $scope.data = [];
        $arrName = ["sleeping", "awake", "awakening", "inBed"];
        $tmp = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= data.count()-1; j++){
            $tmp.push(data["sleep_hist"][j][$arrName[i]]);
          }
        }
        $scope.data = $tmp;

        /*$scope.data = [
          [data["sleep_hist"][0]["sleeping"], data["sleep_hist"][1]["sleeping"], data["sleep_hist"][2]["sleeping"], data["sleep_hist"][3]["sleeping"], data["sleep_hist"][4]["sleeping"], data["sleep_hist"][5]["sleeping"], data["sleep_hist"][6]["sleeping"], data["sleep_hist"][7]["sleeping"], data["sleep_hist"][8]["sleeping"], data["sleep_hist"][9]["sleeping"], data["sleep_hist"][10]["sleeping"], data["sleep_hist"][11]["sleeping"], data["sleep_hist"][12]["sleeping"], data["sleep_hist"][13]["sleeping"], data["sleep_hist"][14]["sleeping"], data["sleep_hist"][15]["sleeping"], data["sleep_hist"][16]["sleeping"], data["sleep_hist"][17]["sleeping"], data["sleep_hist"][18]["sleeping"], data["sleep_hist"][19]["sleeping"], data["sleep_hist"][20]["sleeping"], data["sleep_hist"][21]["sleeping"], data["sleep_hist"][22]["sleeping"], data["sleep_hist"][23]["sleeping"], data["sleep_hist"][24]["sleeping"], data["sleep_hist"][25]["sleeping"], data["sleep_hist"][26]["sleeping"], data["sleep_hist"][27]["sleeping"], data["sleep_hist"][28]["sleeping"], data["sleep_hist"][29]["sleeping"], data["sleep_hist"][30]["sleeping"]],
          [data["sleep_hist"][0]["awake"], data["sleep_hist"][1]["awake"], data["sleep_hist"][2]["awake"], data["sleep_hist"][3]["awake"], data["sleep_hist"][4]["awake"], data["sleep_hist"][5]["awake"], data["sleep_hist"][6]["awake"], data["sleep_hist"][7]["awake"], data["sleep_hist"][8]["awake"], data["sleep_hist"][9]["awake"], data["sleep_hist"][10]["awake"], data["sleep_hist"][11]["awake"], data["sleep_hist"][12]["awake"], data["sleep_hist"][13]["awake"], data["sleep_hist"][14]["awake"], data["sleep_hist"][15]["awake"], data["sleep_hist"][16]["awake"], data["sleep_hist"][17]["awake"], data["sleep_hist"][18]["awake"], data["sleep_hist"][19]["awake"], data["sleep_hist"][20]["awake"], data["sleep_hist"][21]["awake"], data["sleep_hist"][22]["awake"], data["sleep_hist"][23]["awake"], data["sleep_hist"][24]["awake"], data["sleep_hist"][25]["awake"], data["sleep_hist"][26]["awake"], data["sleep_hist"][27]["awake"], data["sleep_hist"][28]["awake"], data["sleep_hist"][29]["awake"], data["sleep_hist"][30]["awake"]],
          [data["sleep_hist"][0]["awakening"], data["sleep_hist"][1]["awakening"], data["sleep_hist"][2]["awakening"], data["sleep_hist"][3]["awakening"], data["sleep_hist"][4]["awakening"], data["sleep_hist"][5]["awakening"], data["sleep_hist"][6]["awakening"], data["sleep_hist"][7]["awakening"], data["sleep_hist"][8]["awakening"], data["sleep_hist"][9]["awakening"], data["sleep_hist"][10]["awakening"], data["sleep_hist"][11]["awakening"], data["sleep_hist"][12]["awakening"], data["sleep_hist"][13]["awakening"], data["sleep_hist"][14]["awakening"], data["sleep_hist"][15]["awakening"], data["sleep_hist"][16]["awakening"], data["sleep_hist"][17]["awakening"], data["sleep_hist"][18]["awakening"], data["sleep_hist"][19]["awakening"], data["sleep_hist"][20]["awakening"], data["sleep_hist"][21]["awakening"], data["sleep_hist"][22]["awakening"], data["sleep_hist"][23]["awakening"], data["sleep_hist"][24]["awakening"], data["sleep_hist"][25]["awakening"], data["sleep_hist"][26]["awakening"], data["sleep_hist"][27]["awakening"], data["sleep_hist"][28]["awakening"], data["sleep_hist"][29]["awakening"], data["sleep_hist"][30]["awakening"]],
          [data["sleep_hist"][0]["inBed"], data["sleep_hist"][1]["inBed"], data["sleep_hist"][2]["inBed"], data["sleep_hist"][3]["inBed"], data["sleep_hist"][4]["inBed"], data["sleep_hist"][5]["inBed"], data["sleep_hist"][6]["inBed"], data["sleep_hist"][7]["inBed"], data["sleep_hist"][8]["inBed"], data["sleep_hist"][9]["inBed"], data["sleep_hist"][10]["inBed"], data["sleep_hist"][11]["inBed"], data["sleep_hist"][12]["inBed"], data["sleep_hist"][13]["inBed"], data["sleep_hist"][14]["inBed"], data["sleep_hist"][15]["inBed"], data["sleep_hist"][16]["inBed"], data["sleep_hist"][17]["inBed"], data["sleep_hist"][18]["inBed"], data["sleep_hist"][19]["inBed"], data["sleep_hist"][20]["inBed"], data["sleep_hist"][21]["inBed"], data["sleep_hist"][22]["inBed"], data["sleep_hist"][23]["inBed"], data["sleep_hist"][24]["inBed"], data["sleep_hist"][25]["inBed"], data["sleep_hist"][26]["inBed"], data["sleep_hist"][27]["inBed"], data["sleep_hist"][28]["inBed"], data["sleep_hist"][29]["inBed"], data["sleep_hist"][30]["inBed"]]];
        */
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

    .controller("sleepLastYearCtrl",function ($scope,sleepLastYear) {
      sleepLastYear.getData(function (data) {

        $scope.data = [];
        $arrName = ["sleeping", "awake", "awakening", "inBed"];
        $tmp = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 6; j++){
            $tmp.push(data["sleep_hist"][j][$arrName[i]]);
          }
        }
        $scope.data = $tmp;

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
  .controller("sleepMeanYearsCtrl",function ($scope,sleepMeanYears) {
    sleepMeanYears.getData(function (data) {

      $scope.data = [];
      $arrName = ["mean_sleeping", "mean_awake", "mean_awakening", "mean_inBed"];
      $tmp = [];
      for(var i = 0; i < 4; i++){
        for(var j = 0; j <= 6; j++){
          $tmp.push(data[j][$arrName[i]]);
        }
      }
      $scope.data = $tmp;

      /*$scope.data = [
      [data[0]["mean_sleeping"],data[1]["mean_sleeping"],data[2]["mean_sleeping"],data[3]["mean_sleeping"],data[4]["mean_sleeping"],data[5]["mean_sleeping"],data[6]["mean_sleeping"]],
      [data[0]["mean_awake"],data[1]["mean_awake"],data[2]["mean_awake"],data[3]["mean_awake"],data[4]["mean_awake"],data[5]["mean_awake"],data[6]["mean_awake"]],
      [data[0]["mean_awakening"],data[1]["mean_awakening"],data[2]["mean_awakening"],data[3]["mean_awakening"],data[4]["mean_awakening"],data[5]["mean_awakening"],data[6]["mean_awakening"]],
      [data[0]["mean_in_bed"],data[1]["mean_in_bed"],data[2]["mean_in_bed"],data[3]["mean_in_bed"],data[4]["mean_in_bed"],data[5]["mean_in_bed"],data[6]["mean_in_bed"]]
    ];*/

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


