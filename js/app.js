var app = angular.module('bandApp',
  ['ngRoute',
   'RouteControllers',
   'ngAnimate', 
   'ngTouch', 
   'ui.bootstrap',
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
        .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'MusicController'
    })  
        .when('/video', {
        templateUrl: 'templates/video.html',
        controller: 'VideoController'
    })
         .when('/photos', {
        templateUrl: 'templates/photos.html',
        controller: 'PhotosController'
    })
        .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })     
        .otherwise({
            redirectTo: '/'
        })
        $locationProvider.html5Mode(true);
}]);