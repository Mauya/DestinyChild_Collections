var app = angular.module('DCCapp',
	['ngRoute', 
	'RouteControllers',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
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
        .when('/collection', {
        templateUrl: 'templates/collection.html',
        controller: 'CollectionController'
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