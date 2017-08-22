angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Destiny's Child Collections!";
        $scope.band = [ 
        	{
		    	img: 'imgs/home/himg6.jpg',
		    	caption: 'Strong women survivor'
		    },
		    {
		    	img: '/imgs/home/himg5.jpg',
		    	caption: 'Something is ...'
		    },
		    {
		    	img: '/imgs/home/himg7.jpg',
		    	caption: 'You deserve to have fun!'
		    },
		]
    });