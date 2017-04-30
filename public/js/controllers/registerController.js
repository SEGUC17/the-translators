var registerController = function($scope, $location, factory, $http) {
    console.log("Controller is here")
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.age = '';
    $scope.username = '';
    $scope.email = '';
    $scope.password = '';
    $scope.mobilenumber = '';
    $scope.gender = '';

    $scope.register = function() {
        var body = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            age: $scope.age,
            username: $scope.username,
            email: $scope.email,
            password: $scope.password,
            mobilenumber: $scope.mobilenumber,
            gender: $scope.gender,
        };
        //REGISTER IN FRONTEND AND SAVED IN THE DATABASE
        $http.post('http://localhost:8080/register', body)
            .then(function(data) {
                alert('user created!');
                factory.SetUser(data.data.data);
                $location.path('/customerlogin');
            })
            .catch(function(error) {
                alert(error.data.error);
            });
    }
}

registerController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('registerController', registerController);