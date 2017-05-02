var app = angular.module('seProject');

app.controller('updateUserProfileCtrl', function($scope, $http, $location, $window, $routeParams) {


	$scope.submit = function() { //USER CLICKED ON CHANGE PASSWORD BUTTON IN RESET PASSWORD PAGE

		//FIRING RESET PASSWORD REQUEST TO THE BACK END API
		$http.post('/editCustomerDetails', { params: {
			'username': $scope.username,
			'password': $scope.password,
			'email': $scope.email,
			'age': $scope.age,
			'gender': $scope.gender,
			'firstname': $scope.firstname,
			'lastname': $scope.lastname,
			'mobilenumber':$scope.mobileno
		} }).then(function successCallback(response) {
			if (response.data.success == true) {
				$window.alert("Info update succesfully");
			} else {
				$window.alert("Something Went Wrong  ,, please Try Again");
			}
		}, function errorCallback(response) {
			$window.alert(response.data.message);
		});

	},

	$scope.update = function() {
		$http.post('/gymDetailsUpdate', { params: {
			'Email':$scope.Email,
			'GymName_location':$scope.GymName_location,
			'Address':$scope.Address,
		 'BusinessUsername':$scope.BusinessUsername,
			'Password':$scope.Password,
			'PhoneNumber':$scope.PhoneNumber,
			'Description':$scope.Description,
			'BankName':$scope.BankName,
			'AccountNumber':$scope.AccountNumber,
			'Description':$scope.Description
		} }).then(function successCallback(response) {
			if (response.data.success == true) {
				$window.alert("Info update succesfully");
			} else {
				$window.alert("Something Went Wrong  ,, please Try Again");
			}
		}, function errorCallback(response) {
			$window.alert(response.data.message);
		});
	}
});
