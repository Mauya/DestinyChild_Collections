angular.module('RouteControllers', [])
app.controller('HomeController',  function($scope) {
    $scope.title = "Destiny's Child Collections";
    $scope.band = [ 
    	{
	    	img: 'imgs/home/himg6.jpg',
	    	caption: 'Survivor'
	    },
	    {
	    	img: '/imgs/home/himg5.jpg',
	    	caption: 'Something is ...'
	    },
	    {
	    	img: '/imgs/home/himg7.jpg',
	    	caption: 'Brown eyes'
	    }
	];
	 $scope.header = 'modal-header';
	 $scope.mtitle = 'modal-title';
	 $scope.body = 'modal-body';
	 $scope.footer = 'modal-footer';
});