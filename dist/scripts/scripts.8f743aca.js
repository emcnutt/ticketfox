"use strict";!function(){angular.module("ticketfoxApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","firebase","firebase.ref","firebase.auth"])}(),function(){var a=function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]};a.$inject=["$scope"],angular.module("ticketfoxApp").controller("MainController",a)}(),angular.module("firebase.config",[]).constant("FBURL","https://blinding-heat-7822.firebaseio.com").constant("SIMPLE_LOGIN_PROVIDERS",["google"]).constant("loginRedirectPath","/login"),function(){var a=function(a,b){return new a.Firebase(b)};angular.module("firebase.ref",["firebase","firebase.config"]).factory("Ref",["$window","FBURL",a])}(),function(){var a=function(a,b,c,d){function e(b){a.err=b,d(function(){a.err=null},5e3)}a.messages=c(b.child("messages").limitToLast(10)),a.messages.$loaded()["catch"](e),a.addMessage=function(b){b&&a.messages.$add({text:b})["catch"](e)}};a.$inject=["$scope","Ref","$firebaseArray","$timeout"],angular.module("ticketfoxApp").controller("ChatController",a)}(),function(){var a=function(){return function(a){return angular.isArray(a)?a.slice().reverse():[]}};angular.module("ticketfoxApp").filter("reverse",a)}(),function(){var a=function(a,b){return a(b)};a.$inject=["$firebaseAuth","Ref"],angular.module("firebase.auth",["firebase","firebase.ref"]).factory("Auth",a)}(),function(){var a=function(a,b,c){function d(){c.path("/account")}function e(b){a.err=b}a.oauthLogin=function(c){a.err=null,b.$authWithOAuthPopup(c,{rememberMe:!0}).then(d,e)},a.anonymousLogin=function(){a.err=null,b.$authAnonymously({rememberMe:!0}).then(d,e)}};a.$inject=["$scope","Auth","$location"],angular.module("ticketfoxApp").controller("LoginController",a)}(),function(){var a=function(a,b,c,d,e){a.user=b,a.logout=function(){c.$unauth()},a.messages=[];var f=e(d.child("users/"+b.uid));f.$bindTo(a,"profile")};a.$inject=["$scope","user","Auth","Ref","$firebaseObject"],angular.module("ticketfoxApp").controller("AccountContoller",a)}(),function(){var a=function(a,b){return{restrict:"A",link:function(c,d){function e(){b(function(){d.toggleClass("ng-cloak",!a.$getAuth())},0)}d.addClass("ng-cloak"),a.$onAuth(e),e()}}};angular.module("ticketfoxApp").directive("ngShowAuth",["Auth","$timeout",a])}(),function(){var a=function(a,b){return{restrict:"A",link:function(c,d){function e(){b(function(){d.toggleClass("ng-cloak",!!a.$getAuth())},0)}d.addClass("ng-cloak"),a.$onAuth(e),e()}}};angular.module("ticketfoxApp").directive("ngHideAuth",["Auth","$timeout",a])}(),angular.module("ticketfoxApp").config(["$routeProvider","SECURED_ROUTES",function(a,b){a.whenAuthenticated=function(c,d){return d.resolve=d.resolve||{},d.resolve.user=["Auth",function(a){return a.$requireAuth()}],a.when(c,d),b[c]=!0,a}}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"main/main.html",controller:"MainController"}).when("/chat",{templateUrl:"chat/chat.html",controller:"ChatController"}).when("/login",{templateUrl:"login/login.html",controller:"LoginController"}).whenAuthenticated("/account",{templateUrl:"account/account.html",controller:"AccountController"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location","Auth","SECURED_ROUTES","loginRedirectPath",function(a,b,c,d,e){function f(a){!a&&g(b.path())&&b.path(e)}function g(a){return d.hasOwnProperty(a)}c.$onAuth(f),a.$on("$routeChangeError",function(a,c,d,f){"AUTH_REQUIRED"===f&&b.path(e)})}]).constant("SECURED_ROUTES",{});