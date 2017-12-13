angular.module('RouteControllers', [])
app.controller('ContactController', function($scope){
$scope.contacts =[
 {
  department:"DC Collectors USA",
  email:"collector@destinyschildcollectors.com",
  telephone: "+1 444-383-2200"
  },
$scope.resultMessage,
$scope.formdata, // is object holding name, email etc
$scope.contactFormDisabled = false,
$scope.submitForm = function(isValid) {
    this.formInput = {
        name: $("input[name='name']").val(),
        email: $("input[name='email']").val(),
        message: $("textarea[name='message']").val()
   };
    if(isValid) {
      console.log('Message sent successfully');
      console.log(this.formInput);
    } else {
      console.log('Failed to send message');
    }
  },
]});