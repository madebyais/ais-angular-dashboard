/**
*
*   This file contain the main configuration
*   for `ais-angular` single page application
*
*   Initialize angular application
*
*   Default module used:
*     ngRoute
**/

var app = angular.module('ais-angular', ['ngRoute']);

/**
*
*   Initialize application config
*
*   To make you easier manage the application routes,
*   please find the `routes.js` file and
*   add your routes based on your needs.
*
**/

app.config(function ($routeProvider) {
  routes.forEach(function (r) { $routeProvider.when(r.path, { templateUrl: r.templateUrl, controller: r.controller }) });
});
