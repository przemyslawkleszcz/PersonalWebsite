var app = angular.module('PersonalWebsite', ['ngRoute', 'ngSanitize', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/home1", {
        templateUrl: "/app/views/home1.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});