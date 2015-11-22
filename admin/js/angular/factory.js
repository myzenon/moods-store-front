angular.module('MoodsApp')
  .factory('Order', function OrderFactory($http) {
    return {
      getOrder : function() {
        return $http.get(baseURL + '/orders/');
      },
      updateOrderStatus : function(statusID, data) {
        return $http.put(baseURL + '/orders/cake/' + data.cake.id + '/status/' + statusID, data);
      }
    };
  })
;
