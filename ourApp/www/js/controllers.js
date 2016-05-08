angular.module('app.controllers', [])

.controller('profileCtrl', function($scope) {

})

.controller('activityCtrl', function($scope) {

})

.controller('performanceCtrl', function($scope) {

})

.controller('sleepCtrl', function($scope) {

})

.controller('settingCtrl', function($scope, $ionicPopup){
  // A confirm dialog
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Consume Ice Cream',
      template: 'Are you sure you want to eat this ice cream?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
});

