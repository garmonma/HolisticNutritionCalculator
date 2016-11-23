/**
 * Main AngularJS Web Application
 */
var app = angular.module('HolisticNutritionCalculator', [
    'CalculatorController',
    'MealController',
    'MealPlannerController',
    'RegisterController',
    'UserAccountController',
    'ngRoute'

]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/calculate", {templateUrl: "partials/calculator.html", controller: "CalcCtrl"})
        .when("/myAccount", {templateUrl: "partials/myAccount.html", controller: "UserAccountCtrl"})
        .when("/register", {templateUrl: "partials/register.html", controller: "RegisterCtrl" })
        .when("/meal", {templateUrl: "partials/meal.html", controller: "MealCtrl"})
        .when("/mealPlanner", {templateUrl: "partials/mealPlanner.html", controller: "MealPlannerCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});
