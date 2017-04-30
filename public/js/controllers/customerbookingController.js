var customerbookingController = function($scope, $location, factory, $http) {
   console.log("testing view customer bookings")
   

   $http.post('http://localhost:8080/MyBookings', {})
       .then(function(response) {
           console.log(response.data.data)
           $scope.Bookings = response.data.data;
       }).catch(function(response) {
           alert(response.data.error);
       });
   }


customerbookingController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('customerbookingController', customerbookingController);