var app = angular.module('DCCapp', 
	['ngRoute', 
	'RouteControllers'
	]);
 
app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
 		.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    // .when('/accounts/register', {
    //     templateUrl: 'templates/register.html',
    //     controller: 'RegisterController'
    // });
    .otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
}]);