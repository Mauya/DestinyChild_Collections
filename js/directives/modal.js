app.directive('modalForm', function() { 
  return { 
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: { 
      visible: '=',
       
    }, 
    templateUrl: 'js/directives/modal-form.html' 
  }; 
});