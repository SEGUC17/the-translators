App.config(function($routeProvider){
    $routeProvider
    .when('/bookingrequest',{
        templateUrl:'../views/bookingrequest.html',
        controller: 'bookingrequestController'
    })
    .when('/MyBookings',{ 
        templateUrl:'../views/MyCustomerBookings.html',
          controller: 'customerbookingController'
    })
     .when('/customerlogin',{ 
        templateUrl:'../views/Login.html',
          controller: 'LoginController'
    })
    .when('/register', {
            templateUrl: '../views/register.html',
            controller: 'registerController',
        })
    .when('/subscribe', {
        templateUrl: '../views/subscribe.html',
        controller: 'subscribeController',
        })
    .when('/businesslogin',{ 
        templateUrl:'../views/businessLogin.html',
          controller: 'businessLoginController'
        })
   .when('/viewproducts',{ 
            templateUrl:'../views/viewproduct.html',
            controller: 'viewproductController'
    })  
    .when('/product',{ 
            templateUrl:'../views/product.html',
            controller: 'productController'
    })   
})