JsApp = angular.module('JsApp', ['ui.router', 'controllers', 'services', 'ngAnimate']);

controllers = angular.module('controllers', []);
services = angular.module('services', ['ngResource']);

JsApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "./partials/home.html",
            controller: "HomeCtrl"
        })
        .state('about', {
            url: '/about',
            templateUrl: './partials/about.html',
            controller: "AboutCtrl"
        });
}]);