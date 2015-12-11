'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountController
 * @description
 * # AccountController
 * Provides rudimentary account management functions.
 */
(function() {
    var AccountContoller = function ($scope, user, Auth, Ref, $firebaseObject) {
        $scope.user = user;
        $scope.logout = function() { Auth.$unauth(); };
        $scope.messages = [];
        var profile = $firebaseObject(Ref.child('users/'+user.uid));
        profile.$bindTo($scope, 'profile');
    };

    angular
        .module('ticketfoxApp')
        .controller('AccountContoller', AccountContoller);
})();
