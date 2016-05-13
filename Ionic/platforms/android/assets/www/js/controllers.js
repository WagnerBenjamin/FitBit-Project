angular.module('app.controllers', [])

.controller('profileCtrl', function($scope) {

})

.controller('activityCtrl', function($scope) {

})

.controller('performanceCtrl', function($scope) {

})

.controller('sleepCtrl', function($scope) {

})

.controller('settingCtrl', function($scope, $ionicPopover){
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }
});


