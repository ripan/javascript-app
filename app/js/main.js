JsApp = angular.module('JsApp', ['ui.router', 'controllers', 'ngAnimate']);
controllers = angular.module('controllers', []);
JsApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "./partials/home.html",
            controller: "MainController"
        })
        .state('about', {
            url: '/about',
            templateUrl: './partials/about.html',
            controller: "MainController"
        });
}]);