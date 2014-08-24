app.config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider'
  ($stateProvider, $urlRouterProvider, $locationProvider) ->

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    $stateProvider

      # .state 'foo',
      #   url: '/foo'
      #   template: JST['/foo.html']
      #   controller: 'fooCtrl'
])
