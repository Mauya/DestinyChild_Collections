app.directive('audioPlayer', function() { 
  	return { 
	    restrict: 'E',
	    scope: true, 
	    transclude: false,
	    templateurl: "/js/directives/footer.html",
	    controller: "AudioController"
 	};
});    