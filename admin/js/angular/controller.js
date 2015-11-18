angular.module('MoodsApp')
  .controller('MenuCtrl', function ($scope, $localStorage) {
    $scope.menuNow = 1;
    $scope.logout = function() {
      delete $localStorage.login_token;
      location.href = 'login.html';
    };
    $scope.activeMenu = function(menuID) {
      $scope.menuNow = menuID;
    };
  })
  .controller('SummaryCtrl', function($scope, $timeout) {
    $scope.info = {"cake" : 2, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1};

    $scope.cake = cakeLists;

    $scope.orderList = [
      {"cake" : 2, id: 1, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 0, id: 2, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 1, id: 12, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 3, id: 84, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 0, id: 112, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 2, id: 51, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 1, id: 61, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 0, id: 72, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 3, id: 93, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 1, id: 225, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 2},
      {"cake" : 2, id: 25, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 2}
    ];

    $timeout(function () {
      $('.collapsible').collapsible({
        accordion : false
      });
    },5);

    $scope.status = [
      {id : 0, name : 'Pending ...', icon : 'timer'},
      {id : 1, name : 'Accepted', icon : 'check'},
      {id : 2, name : 'Ready To Serve !!', icon : 'cake'},
      {id : 3, name : 'Received', icon : 'mood'},
      {id : 4, name : 'Canceled', icon : 'cancel'}
    ];

  })
  .controller('OrderListCtrl', function($scope, $timeout) {
    $scope.info = {"cake" : 2, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1};

    $scope.cake = cakeLists;

    $scope.orderList = [
      {"cake" : 2, id: 1, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 0, id: 2, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 1, id: 12, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 3, id: 84, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 0, id: 112, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 0},
      {"cake" : 2, id: 51, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 1, id: 61, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 0, id: 72, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 3, id: 93, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1},
      {"cake" : 1, id: 225, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 2},
      {"cake" : 2, id: 25, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 2}
    ];

    // $scope.$watch('orderList' ,function (newVal, oldVal, scope) {
    //   console.log(scope);
    // }, true);

    $timeout(function () {
      $('.collapsible').collapsible({
        accordion : false
      });
    },5);

    $scope.status = [
      {id : 0, name : 'Pending ...', icon : 'timer'},
      {id : 1, name : 'Accepted', icon : 'check'},
      {id : 2, name : 'Ready To Serve !!', icon : 'cake'},
      {id : 3, name : 'Received', icon : 'mood'},
      {id : 4, name : 'Canceled', icon : 'cancel'}
    ];

    $scope.changeStatus = function (orderID , status) {
      $scope.orderList.forEach(function(order) {
        if(order.id == orderID) {
          order.status = status;
          console.log(order); // send
        }
      });
    };


  })
;
