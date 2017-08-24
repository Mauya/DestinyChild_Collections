app.directive('footer', function() { 
  return { 
    restrict: 'E', 
    replace:true,
    templateurl: "/js/directives/footer.html",
    controller: ['$scope', '$filter', function($scope, $filter){
    	
    }]