// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// TODO: améliorer l'echelle des graphs
// TODO: améliorer le code
// TODO: améliorer le css
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','chart.js','angular-svg-round-progressbar'])

  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    Chart.defaults.global.responsive = true;
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
      var tmp = [];

      for(var i = 0; i <= 6; i++){
        tmp.push(data["weight_hist"][i]["weight"]);
      }
      $scope.data = [tmp];
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
        var tmp = [];
        for(var i = 0; i <= data["weight_hist"].length-1; i++){
          tmp.push(data["weight_hist"][i]["weight"]);
        }
        $scope.data = [tmp];
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

  .controller("profileMeanYearsCtrl",function ($scope,profileMeanYears) {
    profileMeanYears.getData(function (data) {
      $scope.data = [
        [data["Mean_weight_years"][0]["weight"],+data["Mean_weight_years"][1]["weight"],data["Mean_weight_years"][2]["weight"],data["Mean_weight_years"][3]["weight"],data["Mean_weight_years"][4]["weight"],data["Mean_weight_years"][5]["weight"],data["Mean_weight_years"][6]["weight"]]
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


  //activity_default
    .controller("activityDefaultCtrl",function (activityDefault,$scope) {
      activityDefault.getData(function (data) {

        $scope.data = [];
        arrName= ["sedentary", "mobile", "active", "veryActive"];
        tmp = [];
        tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 6; j++){
            tmp.push(data["activity_hist"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;


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
        $scope.data = [];
        arrName= ["sedentary", "mobile", "active", "veryActive"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= data["activity_hist"].length-1; j++){
            tmp.push(data["activity_hist"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

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

        $scope.data = [];
        arrName= ["sedentary", "mobile", "active", "veryActive"];
        var tmp= [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 2; j++){
            tmp.push(data["lastyear"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

        $scope.labels = [
          data["lastyear"][0]["date"],data["lastyear"][1]["date"],data["lastyear"][2]["date"]
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

    .controller("activityMeanYearsCtrl",function ($scope,activityMeanYears) {
      activityMeanYears.getData(function (data) {
        $scope.data = [];
        arrName= ["sedentary", "mobile", "active", "veryActive"];
        var tmp= [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 6; j++){
            tmp.push(data["activity_hist"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

        $scope.labels = [
          "2010","2011","2012","2013","2014","2015","2016"
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

    .controller("performanceDefaultCtrl",function ($scope,performanceDefault) {
      performanceDefault.getData(function (data) {
        $scope.data = [];
        var arrName= ["steps", "floors", "distance", "calories"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 6; j++){
            tmp.push(data["perf_hist"][j][arrName[i]]);

          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

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
        $scope.data = [];
        arrName= ["steps", "floors", "distance", "calories"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= data["perf_hist"].length-1; j++){
            tmp.push(data["perf_hist"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

        $scope.labels = [
          "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
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
        $scope.data = [];
        arrName= ["steps", "floors", "distance", "calories"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 2; j++){
            tmp.push(data["lastyear"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

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
        $scope.data = [];
        arrName= ["steps", "floors", "distance", "calories"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 4; i++){
          for(var j = 0; j <= 6; j++){
            tmp.push(data["mean_perf_year"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

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

    .controller("sleepDefaultCtrl",function (sleepDefault,$scope) {
      sleepDefault.getData(function (data) {

        $scope.data = [];
        var arrName= ["sleeping", "awake", "inBed"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 3; i++){
          for(var j = 0; j <= 6; j++){
            tmp.push(data["sleep_hist"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;
        $scope.labels = [
          "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31"
        ];
        $scope.series = [
          "Sleeping",
          "Awake",
          "InBed"
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

    .controller("sleepLastMonthCtrl",function (sleepLastMonth,$scope) {
      sleepLastMonth.getData(function (data) {

        $scope.data = [];
        var arrName= ["sleeping", "awake", "inBed"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 3; i++){
          for(var j = 0; j <= data["sleep_hist"].length-1; j++){
            tmp.push(data["sleep_hist"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;
        $scope.labels = [
          "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ];
        $scope.series = [
          "Sleeping",
          "Awake",
          "InBed"
        ];
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };
      })
    })

    .controller("sleepLastYearCtrl",function ($scope,sleepLastYear) {
      sleepLastYear.getData(function (data) {
        $scope.data = [];
        var arrName= ["mean_sleeping", "mean_awake", "mean_inBed"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 3; i++){
          for(var j = 0; j <= 2 ; j++){
            tmp.push(data["lastyear"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        console.log(tmpArr);
        $scope.data = tmpArr;

        $scope.series = [
          "Sleeping",
          "Awake",
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
        $scope.data = [];
        var arrName= ["mean_sleeping", "mean_awake", "mean_inBed"];
        var tmp = [];
        var tmpArr = [];
        for(var i = 0; i < 3; i++){
          for(var j = 0; j <= 6; j++){
            tmp.push(data["sleep_mean_years"][j][arrName[i]]);
          }
          tmpArr.push(tmp);
          tmp = [];
        }
        $scope.data = tmpArr;

        $scope.series = [
          "Sleeping",
          "Awake",
          "InBed"
        ];

        $scope.labels = [
          data["sleep_mean_years"][0]["date"],data["sleep_mean_years"][1]["date"],data["sleep_mean_years"][2]["date"],data["sleep_mean_years"][3]["date"],data["sleep_mean_years"][4]["date"],data["sleep_mean_years"][5]["date"],data["sleep_mean_years"][6]["date"]
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


