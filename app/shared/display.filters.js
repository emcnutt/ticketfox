'use strict';
(function() {
    var reverse = function() {
        return function(items) {
            return angular.isArray(items)? items.slice().reverse() : [];
        };
    };

    angular
        .module('ticketfoxApp')
        .filter('reverse', reverse);
})();
