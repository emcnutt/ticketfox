'use strict';
(function() {
    var Ref = function($window, FBURL) {
        return new $window.Firebase(FBURL);
    };

    angular
        .module('firebase.ref', ['firebase', 'firebase.config'])
        .factory('Ref', ['$window', 'FBURL', Ref]);
})();
