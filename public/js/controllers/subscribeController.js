var subscribeController = function($scope, $location, factory, $http) {
    console.log("Controller is here")
    $scope.GymName_location = '';
    $scope.Address = '';
    $scope.Email = '';
    $scope.BusinessUsername = '';
    $scope.Password = '';
    $scope.PhoneNumber = '';
    $scope.BankName = '';
    $scope.AccountNumber = '';
    $scope.Description = '';

    $scope.subscribe = function() {
        var body = {
            GymName_location: $scope.GymName_location,
            Address: $scope.Address,
            Email: $scope.Email,
            BusinessUsername: $scope.BusinessUsername,
            Password: $scope.Password ,
            PhoneNumber:  $scope.PhoneNumber,
            BankName : $scope.BankName ,
            AccountNumber: $scope.AccountNumber,
            Description: $scope.Description 
             
        };
        //REGISTER IN FRONTEND AND SAVED IN THE DATABASE
        $http.post('http://localhost:8080/subscribe', body)
            .then(function(data) {
                alert('account created!');
                factory.setBusiness(data.data.data);
                console.log(data.data.data);
                $location.path('/businesslogin');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

subscribeController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('subscribeController', subscribeController);