angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

  .factory('activityDefault', ['$http', function ($http) {
    var data;
    return {
      getData: function (callback) {
        if(data) {
          callback(data);
        } else {
          $http.get('http://10.42.0.1/fitbit_api/api/web/activity').success(function(d) {
            callback(data = d);
          });
        }
      }
    };
  }])

.factory('sleepDefault', ['$http', function ($http) {
  var data;
  return {
    getData: function (callback) {
      if(data) {
        callback(data);
      } else {
        $http.get('http://10.42.0.1/fitbit_api/api/web/sleep').success(function(d) {
          callback(data = d);
        });
      }
    }
  };
}])

    .factory('sleepLastMonth', ['$http', function ($http) {
      var data;
      return {
        getData: function (callback) {
          if(data) {
            callback(data);
          } else {
            $http.get('http://10.42.0.1/fitbit_api/api/web/sleep/lastmonth').success(function(d) {
              callback(data = d);
            });
          }
        }
      };
    }])

    .factory('sleepMeanYears', ['$http', function ($http) {
      var data;
      return {
        getData: function (callback) {
          if(data) {
            callback(data);
          } else {
            $http.get('http://10.42.0.1/fitbit_api/api/web/sleep/sleepmeanyears').success(function(d) {
              callback(data = d);
            });
          }
        }
      };
    }])

    .factory('sleepLastYear', ['$http', function ($http) {
      var data;
      return {
        getData: function (callback) {
          if(data) {
            callback(data);
          } else {
            $http.get('http://10.42.0.1/fitbit_api/api/web/sleep/lastyear').success(function(d) {
              callback(data = d);
            });
          }
        }
      };
    }])

.factory('profileDefault', ['$http', function ($http) {
  var data;
  return {
    getData: function (callback) {
      if(data) {
        callback(data);
      } else {
        $http.get('http://10.42.0.1/fitbit_api/api/web/profile').success(function(d) {
          callback(data = d);
        });
      }
    }
  };
}])

  .factory('profileMeanYears', ['$http', function ($http) {
    var data;
    return {
      getData: function (callback) {
        if(data) {
          callback(data);
        } else {
          $http.get('http://10.42.0.1/fitbit_api/api/web/profile/meanweightyears').success(function(d) {
            callback(data = d);
          });
        }
      }
    };
  }])
  
  
  .factory('profileLastMonth', ['$http', function ($http) {
    var data;
    return {
      getData: function (callback) {
        if(data) {
          callback(data);
        } else {
          $http.get('http://10.42.0.1/fitbit_api/api/web/profile/lastmonth').success(function(d) {
            callback(data = d);
          });
        }
      }
    };
  }])

  .factory('profileLastYear', ['$http', function ($http) {
    var data;
    return {
      getData: function (callback) {
        if(data) {
          callback(data);
        } else {
          $http.get('http://10.42.0.1/fitbit_api/api/web/profile/lastyear').success(function(d) {
            callback(data = d);
          });
        }
      }
    };
  }])

  .factory('performanceDefault', ['$http', function ($http) {
    var data;
    return {
      getData: function (callback) {
        if(data) {
          callback(data);
        } else {
          $http.get('http://10.42.0.1/fitbit_api/api/web/perf').success(function(d) {
            callback(data = d);
          });
        }
      }
    };
  }]);
