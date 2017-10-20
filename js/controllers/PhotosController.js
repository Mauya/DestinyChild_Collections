app.controller('PhotosController', ['$scope', function($scope) {
  $scope.title1 = "Destiny's Child Photo Gallery";
  $scope.myInterval = 0000;
  $scope.active = 0; //Retrieve and set images
  $scope.slides= [ 
	  { 
	  	image: "imgs/gallery/gimag1.jpg",
      	id: 0
	  },
	  { 
	  	image: "imgs/gallery/gimag2.jpg",
	  	id: 1 
	  },
	  { 
	    image: "imgs/gallery/gimag3.jpg",
	    id: 2 
	  },
	  { 
	    image: "imgs/gallery/gimag4.jpg",
	    id: 3 
	  },
	  { 
	    image: "imgs/gallery/gimag5.jpg",
	    id: 4 
	  },
	  {
	    image: "imgs/gallery/gimag6.jpg",
	    id: 5 
	  },
	  { 
	    image: "imgs/gallery/gimag7.jpg",
	    id: 6 
	  },
	  { 
	    image: "imgs/gallery/gimag8.jpg",
	    id: 7 
	  },
	  { 
	    image: "imgs/gallery/gimag9.jpg",
	    id: 8 
	  } 
	];
}]);