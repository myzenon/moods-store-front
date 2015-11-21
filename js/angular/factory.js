angular.module('MoodsApp')
  .factory('Cake', function CakeFactory($http) {
    return {
      getCake : function(callback) {
        $http.get(baseURL + '/cakes').success(function (data) {
            callback(data);
        });
      }
    };
  })
  .factory('Order', function OrderFactory($http) {
    return {
      makeOrder : function(cakeID, data) {
        return $http.post(baseURL + '/orders/cake/' + cakeID + '/status/0', data);
      },
      getOrder : function(orderID) {
        return $http.get(baseURL + '/orders/' + orderID);
      },
      updateOrder : function(data) {
        return $http.put(baseURL + '/orders/', data);
      },
      deleteOrder : function(orderID) {
        return $http.delete(baseURL + '/orders/' + orderID)
      }
    };
  })
;
var baseURL = 'http://hydrogen01.cloudapp.net/moods';
