var viewproductController = function($scope, $location, factory, $http) {
    console.log("testing viewproductController")
 var isBusinessLoggedIn = factory.isBusinessLoggedIn();
    if(!isBusinessLoggedIn){
        $location.path('/businesslogin');
    }
    else{
         $http.post('http://localhost:8080/viewproducts', {})
        .then(function(response) { 
            console.log(factory.getProduct());
            $scope.Products = response.data.data;
        }).catch(function(response) {
            alert(response.data.error);
        });
    }

$scope.getProductID=function(){
       $location.path('/product');
   }
    // $scope.deleteProduct = function(id) {
    //     $http.delete('/removeproduct' , id)
    //         .success(function(data) {
    //             $scope.product = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error: ' + data);
    //         });
    // };
   
}


viewproductController.$inject = ['$scope', '$location', 'factory', '$http'];
App.controller('viewproductController',viewproductController);