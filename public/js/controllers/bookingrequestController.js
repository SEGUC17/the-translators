var bookingrequestController = function($scope, $location, factory, $http) {
    console.log("testing bookingrequestController");
   
   
    $scope.CustomerUsername = '';
    $scope.GymNameLocation = '';
    $scope.selectedClass = '';
    $scope.selectedTime = '';
    $scope.selectedDate = '';
    $scope.onBookingSubmit = function() {
        var body = {
            CustomerUsername: $scope.CustomerUsername,
            GymNameLocation: $scope.GymNameLocation,
            selectedClass: $scope.selectedClass,
            selectedTime: $scope.selectedTime,
            selectedDate: $scope.selectedDate
        };
        //business owner subscribes and gets added to the platform's database
        $http.post('http://localhost:8080/bookingrequest', body)
            .then(function(data) {
                alert('booking created!');
             })
            .catch(function(error) {
                alert(error.data.error);
            });
    };
}

bookingrequestController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('bookingrequestController', bookingrequestController);