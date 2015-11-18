angular.module('MoodsApp')
  .controller('HeaderCtrl', function($scope, $location) {
    $scope.changePath = function(path) {
      $location.path(path);
    };
  })
  .controller('CakeListCtrl', function($scope, $location) {
    $scope.cakeLists = cakeLists;
    $scope.selectCake = function(cakeid) {
      $location.path('/order/' + cakeid);
    };
  })
  .controller('OrderCtrl', function($scope, $routeParams, $location) {
    $scope.error = "dsfdsfds";
    $scope.changePath = function(path) {
      $location.path(path);
    };
    $scope.cake = cakeLists.find(function(cake) {
        return cake.id == $routeParams.id;
    });
  })
  .controller('CodeCtrl', function ($scope, $routeParams) {
    $scope.code = $routeParams.id;
  })
  .controller('CheckOrderCtrl', function ($scope, $location) {
    $scope.error = "Invalid Order ID";
    $scope.checkOrder = function() {
      $location.path('/checkOrder/' + $scope.orderid);
    };
  })
  .controller('CheckOrderIDCtrl', function ($scope, $routeParams, $location, $timeout) {
    // If not found
    if($routeParams.id == 3) {
      $location.path('/checkOrder');
    }
    // If we found input
    $scope.info = {"cake" : 2, "name":"Test","phone":"2356","date":"06/11/2015","need":"54356","allergic":"5646456","size":"2","topping":["macaroons","strawberries"], "status": 1};
    $scope.cake = cakeLists[$scope.info.cake];

    // $watchCollection for showing ; production will be $watch
    $scope.$watchCollection('info', function() {
      if($scope.info.status == 1) {
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
      }, 5);
    });

    // If status more than 1 ; all input will be disabled
    $scope.info.status = 1;

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


    // For the test
    $scope.updateOrder = function() {
      $scope.info.status++;
    };

    $scope.deleteOrder = function() {
      if(confirm('Do you want to delete this order ?')) {
        $location.path('/');
      }
    }

  })
;
