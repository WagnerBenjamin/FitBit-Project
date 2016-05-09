// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','chart.js','highcharts-ng'])

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

  .controller('myctrl', function ($scope) {

    $scope.chartConfig = {
      options: {
        chart: {
          type: 'solidgauge'
        },
        pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
            backgroundColor:'#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
        solidgauge: {
          dataLabels: {
            y: -30,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      series: [{
        data: [16],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/>' +
          '<span style="font-size:12px;color:silver">km/h</span></div>'
        }
      }],
      title: {
        text: 'Solid Gauge',
        y: 50
      },
      yAxis: {
        currentMin: 0,
        currentMax: 20,
        title: {
          y: 140
        },
        stops: [
          [0.1, '#DF5353'], // red
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#55BF3B'] // green
        ],
        lineWidth: 0,
        tickInterval: 20,
        tickPixelInterval: 400,
        tickWidth: 0,
        labels: {
          y: 15
        }
      },
      loading: false
    }
  });



