angular.module('RouteControllers', [])
app.controller('HomeController',  function($scope) {
    $scope.title = "Destiny's Child Collections";
    
	$scope.header = 'modal-header';
	$scope.mtitle = 'modal-title';
	$scope.body = 'modal-body';
	$scope.footer = 'modal-footer';
});