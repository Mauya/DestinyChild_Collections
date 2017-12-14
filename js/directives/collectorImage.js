app.directive('collectorInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/collectorImage.html',
    controller: 'PhotosController' 
  }; 
});