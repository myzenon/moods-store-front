angular.module('MoodsApp')
  .controller('MenuCtrl', function ($rootScope, $scope, $localStorage) {
    $scope.logout = function() {
      delete $localStorage.login_token;
      location.href = 'login.html';
    };
    $scope.activeMenu = function(menuID) {
      $rootScope.menuNow = menuID;
    };
  })
  .controller('SummaryCtrl', function($scope, $timeout, $rootScope) {
    $rootScope.menuNow = 2;
    $rootScope.getOrderLists(function () {
      $timeout(function () {
        $('.collapsible').collapsible({
          accordion : false
        });
      },5);
      $scope.orderListsScope = $rootScope.orderLists.filter(function (order) {
        return $rootScope.statusEnum[order.status].id == 3;
      });
      $scope.orderListsScope.sort(function (orderA, orderB) {
        return orderA.pickupDate - orderB.pickupDate;
      });
    });

  })
  .controller('OrderListCtrl', function($scope, $timeout, $rootScope, Order) {
    $rootScope.menuNow = 1;
    $rootScope.getOrderLists(function () {
      $timeout(function () {
        $('.collapsible').collapsible({
          accordion : false
        });
      },5);
      var orderLists0 = $rootScope.orderLists.filter(function (order) {
        return $rootScope.statusEnum[order.status].id == 0;
      });
      var orderLists1 = $rootScope.orderLists.filter(function (order) {
        return $rootScope.statusEnum[order.status].id == 1;
      });
      var orderLists2 = $rootScope.orderLists.filter(function (order) {
        return $rootScope.statusEnum[order.status].id == 2;
      });
      orderLists0.sort(function (orderA, orderB) {
        return orderA.pickupDate - orderB.pickupDate;
      });
      orderLists1.sort(function (orderA, orderB) {
        return orderA.pickupDate - orderB.pickupDate;
      });
      orderLists2.sort(function (orderA, orderB) {
        return orderA.pickupDate - orderB.pickupDate;
      });
      $scope.orderListsScope = orderLists0.concat(orderLists1, orderLists2);
    });
    $scope.changeStatus = function (order, status) {
      order.status = status;
      Order.updateOrder(order).success(function (data) {
        console.log(data);
      }).error(function (data) {
        console.log(data);
      });
    };
  })
;
