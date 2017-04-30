var businessLoginController = function($scope, $location, factory, $http){
    $scope.username = '';
    $scope.password= '';
    $scope.login = function(){
        var Business = {
            username: $scope.username,
            password: $scope.password
        };

    $http.post('http://localhost:8080/businesslogin', Business)
    .then(function(data){
        alert(data.data.data);
        factory.setBusiness(Business);
        console.log(data.data.data);
        $location.path("/HomePage");
    }).catch(function(error){
        console.log(error.data.error);
        alert(error.data.error);
    });
    }
}
businessLoginController.$inject =['$scope', '$location', 'factory', '$http'];
App.controller('businessLoginController',businessLoginController);