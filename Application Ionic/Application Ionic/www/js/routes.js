angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.activite', {
      cache: false,
      url: '/activite',
      views: {
        'menuContent': {
          templateUrl: 'templates/activite.html',
          controller:'activite'
        }
      }
    })

  .state('app.event', {
      cache: false,
      url: '/event',
      views: {
        'menuContent': {
          templateUrl: 'templates/event.html',
          controller:'event'
        }
      }
    })

  .state('app.inscription', {
      url: '/inscription',
      views: {
        'menuContent': {
          templateUrl: 'templates/inscription.html',
          controller:'inscription'
        }
      }
    })

  .state('app.start', {
      url: '/start',
      views: {
        'menuContent': {
          controller:'start'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
});
