angular.module('MoodsApp', ['ngRoute','ngStorage'])
  .run(function ($rootScope, Order) {
    $rootScope.getOrderLists = function (callback) {
      Order.getOrder().success(function (data) {
        $rootScope.orderLists = data;
        callback();
      });
    };
    $rootScope.statusEnum = {
      'Pending' : {name : 'Pending', icon : 'timer', 'id' : 0},
      'Accepted' : {name : 'Accepted', icon : 'check', 'id' : 1},
      'ReadyToServe' : {name : 'Ready To Serve', icon : 'cake', 'id' : 2},
      'Received' : {name : 'Received', icon : 'mood', 'id' : 3},
      'Canceled' : {name : 'Canceled', icon : 'cancel', 'id' : 4}
    };
    $rootScope.timeStampToDate = function(timeStamp) {
      var date = new Date(timeStamp);
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };
  })
;
var baseURL = 'http://hydrogen01.cloudapp.net/moods';
