/**
*
*   This file contain the main configuration
*   for `ais-angular` single page application
*
*   Initialize angular application and configuration
*
*   Default module used:
*     ngRoute
*
*   To make you easier manage the application routes,
*   please find the `routes.js` file and
*   add your routes based on your needs.
*
**/

'use strict';

var modules = [
	'angular-loading-bar',
	'ngAnimate',
	'ngRoute',
	'$ajax'
];

var flagSidebar = false;

var app = angular
	.module('ais-angular', modules)
	.config(function ($routeProvider) {
		routes.forEach(function (r) { $routeProvider.when(r.path, { templateUrl: r.templateUrl, controller: r.controller }) });
	})
	.run(function ($rootScope) {
		$rootScope.notify = function (message) {
			$.notify({
					icon: "pe-7s-info",
					message: message
				},{
					type: 'info',
					timer: 3,
					placement: {
					from: 'top',
					align: "right"
				}
			});
		}

		$rootScope.openSidebar = function () {
			if (!flagSidebar) {
				flagSidebar = true;
				$('.sidebar').css({ display: 'block', 'z-index': 9999 })
			} else {
				flagSidebar = false;
				$('.sidebar').css({ display: 'none' })
			}
		}
	});
