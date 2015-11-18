angular.module('MoodsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'templates/orderList.html',
        controller : 'OrderListCtrl'
      })
      .when('/summary', {
        templateUrl : 'templates/summary.html',
        controller : 'SummaryCtrl'
      })
      .otherwise({ redirectTo: '/' })
    ;
  })
;
