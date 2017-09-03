app.directive('modalForm', function() { 
  return { 
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: { 
      title: "=modalTitle",
      header: "=modalHeader",
      body: "=modalBody",
      footer: "=modalFooter",
      handler: "collectorForm",  
    }, 

    templateUrl: 'js/directives/modal-form.html' 
  }; 
});