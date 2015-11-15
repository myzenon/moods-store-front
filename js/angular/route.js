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
      .when('/checkOrder', {
        templateUrl : 'templates/checkOrder.html',
        controller : 'CheckOrderCtrl'
      })
      .when('/checkOrder/:id', {
        templateUrl : 'templates/checkOrderID.html',
        controller : 'CheckOrderIDCtrl'
      })
      .otherwise({ redirectTo: '/' })
    ;
  })
;
