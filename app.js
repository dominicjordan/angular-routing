var app = angular.module('angular-routing', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
    .when("/home", {
        templateUrl : "views/home.html",
        controller: "HomeController"
    })
    .when("/second", {
        templateUrl : "views/second.html",
        controller: "SecondController"
    })
    .when("/third", {
        templateUrl : "views/third.html",
        controller: "ThirdController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});