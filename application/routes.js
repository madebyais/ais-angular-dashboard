/**
*
*   This file contain the main route configuration
*   for `ais-angular` single page application
*
*   JSON object format
*     {
*        path: '...', --> page path /, /user, /logout, etc
*        templateUrl: '...', --> the template url, which is the `view.html` file in your module
*        controller: '...' --> the controller name according your definition in controller.js on your module
*     }
**/

var routes = [

  { path: '/', templateUrl: 'application/modules/dashboard/view.html', controller: 'dashboardCtrl' }

];
