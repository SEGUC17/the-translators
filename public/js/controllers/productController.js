var productController = function($scope, $location, factory, $http) {
    console.log("testing productController")

    $scope.product = function(){
         $location.path('/product');
    };
    
    $http.post('http://localhost:8080/product', {})
        .then(function(response) { 
            console.log(factory.getProduct());
            $scope.Products = response.data.data;
        }).catch(function(response) {
            alert(response.data.error);
        });
}

productController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('productController',productController);