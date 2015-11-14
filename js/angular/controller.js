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
;
