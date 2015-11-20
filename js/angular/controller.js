angular.module('MoodsApp')
  .controller('HeaderCtrl', function($scope, $location) {
    $scope.changePath = function(path) {
      $location.path(path);
    };
  })
  .controller('CakeListCtrl', function($scope, $location, $rootScope) {
    $scope.selectCake = function(cakeid) {
      $location.path('/order/' + cakeid);
    };
  })
  .controller('OrderCtrl', function($scope, $routeParams, $location, $rootScope, Order) {
    changeDate = function(date) { // dd/mm/yyyy
      var newDate = date.split('/');
      return newDate[2] + '-' + newDate[1] + '-' + newDate[0];
    };
    $scope.changePath = function(path) {
      $location.path(path);
    };
    $scope.submitOrder = function() {
      var info = {};
      angular.copy($scope.info, info);
      if(!info.topping) {
        info.topping = [];
      }
      for(var i = 0; i < info.topping.length; i++) {
        info.topping[i] = info.topping[i].charAt(0).toUpperCase() + info.topping[i].slice(1);
      }
      if(!info.pickupDate) {
        info.pickupDate = '0000-00-00';
      }
      info.pickupDate = changeDate(info.pickupDate);
      info.cake = $scope.cake;
      Order.makeOrder(info).success(function (data) {
        $scope.changePath('/code/' + data.id);
      }).error(function (data) {
        Materialize.toast(data[0].message, 4000);
        $scope.error = data[0].message;
      });
    };
    $rootScope.$watch('cakeLists', function() {
      if($rootScope.cakeLists) {
        $scope.cake = $rootScope.cakeLists.find(function(cake) {
            return cake.id == $routeParams.id;
        });
      }
    });
  })
  .controller('CodeCtrl', function ($scope, $routeParams) {
    $scope.code = $routeParams.id;
  })
  .controller('CheckOrderCtrl', function ($scope, $location, Order) {
    $scope.checkOrder = function() {
      Order.getOrder($scope.orderid).success(function (data) {
        if(!data.id) {
          $scope.error = "Invalid Order ID";
        }
        else {
          $location.path('/checkOrder/' + $scope.orderid);
        }
      }).error(function () {
        $scope.error = "Invalid Order ID";
      });
    };
  })
  .controller('CheckOrderIDCtrl', function ($scope, $routeParams, $location, $timeout, $rootScope, Order) {
    // $scope.info = {"cake" : 2, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1};
    var timeStampToDate = function(timeStamp) {
      var date = new Date(timeStamp);
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };

    changeDate = function(date) { // dd/mm/yyyy
      var newDate = date.split('/');
      return newDate[2] + '-' + newDate[1] + '-' + newDate[0];
    };

    Order.getOrder($routeParams.id).success(function (data) {
      if(data.id) {
        $scope.info = data;
        $scope.cake = $scope.info.cake;
        $scope.info.pickupDate = timeStampToDate($scope.info.pickupDate);
        if(!$scope.info.status) {
          $scope.info.status = 0;
        }
        $scope.info.size = $scope.info.size + '';
        for(var i = 0; i < $scope.info.topping.length; i++) {
          $scope.info.topping[i] = $scope.info.topping[i].toLowerCase();
        }
        // $watchCollection for showing ; production will be $watch
        $scope.$watch('info', function() {
          if($scope.info.status == 0) {
            $('i.prefix').addClass('active');
          }
          else {
            $('i.prefix').removeClass('active');
          }
          $('select').material_select();
          $timeout(function () {
            $('select').material_select('destroy');
            $('select').material_select();
            jQuery.each($('select[multiple] option:selected:not(:disabled)'), function(i, option) {
              jQuery.each($('ul.multiple-select-dropdown li'), function(j, li) {
                if($(li).text() == $(option).text()) {
                  $('input[type="checkbox"]', li).prop('checked', true);
                }
              });
            });
          }, 1000);
        });
      }
      else {
        $location.path('/checkOrder');
      }
    }).error(function () {
      $location.path('/checkOrder');
    });

    $scope.updateOrder = function() {
      var info = {};
      angular.copy($scope.info, info);
      if(!info.topping) {
        info.topping = [];
      }
      for(var i = 0; i < info.topping.length; i++) {
        info.topping[i] = info.topping[i].charAt(0).toUpperCase() + info.topping[i].slice(1);
      }
      if(!info.pickupDate) {
        info.pickupDate = '0000-00-00';
      }
      info.pickupDate = changeDate(info.pickupDate);
      info.cake = $scope.cake;
      Order.updateOrder(info).success(function (data) {
        console.log(data);
      }).error(function (data) {
        console.log(data);
      });
    };


    // If status more than 1 ; all input will be disabled
    // $scope.info.status = 1;

    // If we found error or sucess
    $scope.sucess = 'sucess';
    $scope.error = 'error';

    $scope.status = [
      {name : 'Pending ...', icon : 'timer'},
      {name : 'Accepted', icon : 'check'},
      {name : 'Ready To Serve !!', icon : 'cake'},
      {name : 'Received', icon : 'mood'},
      {name : 'Canceled', icon : 'cancel'}
    ];

    $scope.deleteOrder = function() {
      if(confirm('Do you want to delete this order ?')) {
        Order.deleteOrder($scope.info.id).success(function (data) {
          console.log(data);
        }).error(function (data) {
          console.log(data);
        });
      }
    }

  })
;
