(function () {

'use strict';


  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/home.html",
          controller: "MainController"
        })
        .when("/about", {
          templateUrl: "./partials/about.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('SampleApp')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Welcome...";
    }
  ]);

}());