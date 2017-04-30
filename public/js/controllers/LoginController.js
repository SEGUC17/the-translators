var LoginController = function($scope, $location, factory, $http){
    $scope.Username = '';
    $scope.Password= '';
    $scope.OnSubmitLogin = function(){
        var User = {
            username: $scope.Username,
            password: $scope.Password
        };

    $http.post('http://localhost:8080/customerlogin', User)
    .then(function(data){
        alert(data.data.data);
        console.log(data.data.data);
        factory.SetUser(User);
        //console.log(factory.GetUser());
        $location.path("/HomePage"); //create the html file for the logged in user homepage
    }).catch(function(error){
        console.log(error.data.error);
        alert(error.data.error);
    });
    }
}
LoginController.$inject =['$scope', '$location', 'factory', '$http'];
App.controller('LoginController',LoginController);