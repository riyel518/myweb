var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "/abouts"

      })
        .when("/test", {
            templateUrl : "aboutme.html"

   });
});
