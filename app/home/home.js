'use strict';
 
angular.module('myApp.home', ['ngRoute','firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
 	$scope.SignIn = function($scope) {
    	var username = $scope.user.email;
    	var password = $scope.user.password;
    	var firebaseObj = new Firebase("https://crackling-inferno-9773.firebaseio.com");
    	var loginObj = $firebaseSimpleLogin(firebaseObj);
	}

}]);