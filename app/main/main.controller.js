'use strict';
/**
 * @ngdoc function
 * @name ticketfoxApp.controller:MainController
 * @description
 * # MainController
 * Controller of the ticketfoxApp
 */
(function() {
    var MainController = function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }
    angular
        .module('ticketfoxApp')
        .controller('MainController', MainController);
})();
