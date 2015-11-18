angular.module('MoodsApp')
  .filter('topping', function() {
    return function(input) {
      input = input || '';
      var output = "";
      for(var i = 0; i < input.length ; i++) {
        var text = input[i].charAt(0).toUpperCase() + input[i].slice(1).toLowerCase();
        output += i == 0 ? text : ", " + text;
      }
      return output;
    };
  })
;
