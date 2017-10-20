app.directive('musicInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
    templateUrl: 'js/directives/musicInfo.html' 
  }; 
});