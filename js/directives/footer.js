app.directive('audioPlayer', function() { 
  	return { 
	    restrict: 'E',
	    scope: true, 
	    replace:true,
	    templateurl: "/js/directives/footer.html",
	    controller: "audioController"
 	};
});    