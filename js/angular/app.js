angular.module('MoodsApp', ['ngRoute', 'angularSmoothscroll'])
  .run(function ($rootScope, Cake) {
    Cake.getCake(function (cakeLists) {
      $rootScope.cakeLists = cakeLists;
    });
  })
;
