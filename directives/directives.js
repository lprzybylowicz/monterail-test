myApp.directive("personModal", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'personModal.html',
       replace: true,
       scope: {
           monterail: "=",
           currentPerson: "=",
           relatedPerson: "="
       }
   }
});