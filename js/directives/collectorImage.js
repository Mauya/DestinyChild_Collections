app.directive('collectorImage', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      slide: '=' 
    }, 
    templateUrl: 'js/directives/collectorImage.html' 
  }; 
});