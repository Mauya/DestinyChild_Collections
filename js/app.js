var app = angular.module('DCCapp',
	['ngRoute', 
	'RouteControllers',
	]);
 
app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
 		.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
        .when('/gallery', {
        templateUrl: 'templates/about.html',
        controller: 'GalleryController'
    })
        .when('/contact', {
        templateUrl: 'templates/about.html',
        controller: 'ContactController'
    })
        .otherwise({
            redirectTo: '/'
        })
        $locationProvider.html5Mode(true);
}]);