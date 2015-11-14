angular.module('MoodsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'templates/cakeList.html',
        controller : 'CakeListCtrl'
      })
      .when('/order/:id', {
        templateUrl : 'templates/order.html',
        controller : 'OrderCtrl'
      })
      .when('/code/:id', {
        templateUrl : 'templates/code.html',
        controller : 'CodeCtrl'
      })
      .otherwise({ redirectTo: '/' })
    ;
  })
;
