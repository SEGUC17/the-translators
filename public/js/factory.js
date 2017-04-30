App.factory('factory', function($http) {
    // creating an empty booking request
    var User = {
        Username: null,
        Password:null
    };
    var Business = {
        username: null,
        Password: null
    };
    var Booking = {
        CustomerUsername: null,
        GymNameLocation: null,
        selectedClass: null,
        selectedTime: null,
        selectedDate: null,
    };
      var Product ={
        prodname: null,
        prodID: null,
        price: null,
        ProductDescription:null,
        Category: null,
        Quantity: null,

    };
    //SETTING AND GETTING DATA ACCORDING TO WHAT WILL BE ENTERED
    return {

        SetBooking: function(NewBooking) {
            Booking = NewBooking;
        },

        GetBooking: function() {
            return Booking;
        },

        GetUser: function(){
            return User;
        },

        SetUser: function(NewUser){
            User = NewUser;
        },
         getBusiness: function(){
            return Business;
        },

        setBusiness: function(NewBusiness){
            Business = NewBusiness;
        },
         isBusinessLoggedIn: function() {
            return Business.username;
        },
         isCustomerLoggedIn: function() {
            return User.Username;
            console.log(User.Username);
        },
        getProduct: function(){
            return Product;
        },
        getProductID: function(){
            return Product.prodID;
        },


    }
});