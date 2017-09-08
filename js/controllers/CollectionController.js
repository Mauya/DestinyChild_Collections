app.controller("CollectionController", function($Scope){
    var collections = [
    {
    title:"Collections",
      gallery:[
        {Photo:"Gallery"},
        {Audio:"Music"},
        {Fashion:"Fashion"}
    ]
}]
  $scope.collections=collections;
})