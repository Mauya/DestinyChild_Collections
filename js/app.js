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
        .when('/', {
        templateUrl: 'templates/modal-form.html',
        controller: 'ModalController'
    })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
    })
        .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
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