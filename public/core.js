var app = angular.module('seProject', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/updateBusinessProfile', {
		templateUrl : 'partials/updateBusinessProfile.html',
		controller : 'updateUserProfileCtrl'
	})
    .when('/updateUserProfile', {
		templateUrl : 'partials/updateUserProfile.html',
		controller: 'updateUserProfileCtrl'
	});
})
