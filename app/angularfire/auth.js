'use strict';
(function() {
    var Auth = function($firebaseAuth, Ref) {
        return $firebaseAuth(Ref);
    };

    angular
        .module('firebase.auth', ['firebase', 'firebase.ref'])
        .factory('Auth', Auth);
})();
