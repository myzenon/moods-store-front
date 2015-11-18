angular.module('MoodsApp')
  .config(function($localStorageProvider) {
    if(!$localStorageProvider.get('login_token')) {
      location.href = 'login.html';
    }
  })
;
