angular.module('firebase.config', [])
  .constant('FBURL', 'https://blinding-heat-7822.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['google'])

  .constant('loginRedirectPath', '/login');
