angular.module('MoodsApp')
  .factory('Order', function OrderFactory($http) {
    return {
      getOrder : function() {
        return $http.get(baseURL + '/orders/');
      },
      updateOrder : function(data) {
        return $http.put(baseURL + '/orders/', data);
      },
    };
  })
;
var baseURL = 'http://hydrogen01.cloudapp.net/moods';
