'use strict';

// Declare the routes you will be using in your website
angular.module('myApp', [
  'ngRoute',
  'myApp.home' 
]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.otherwise({
  	redirectTo: '/home'
  });
}]);
