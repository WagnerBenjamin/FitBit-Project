angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.activity', {
    url: '/activity',
    views: {
      'tab2': {
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      }
    }
  })

  .state('tabsController.performance', {
    url: '/performance',
    views: {
      'tab3': {
        templateUrl: 'templates/performance.html',
        controller: 'performanceCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/user',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sleep', {
    url: '/sleep',
    views: {
      'tab4': {
        templateUrl: 'templates/sleep.html',
        controller: 'sleepCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/user/profile')

  
});
