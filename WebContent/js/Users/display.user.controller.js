var app = angular.module('CSREvents');

app.controller('displayUserController', function($scope, $http, dispUser) {
    $scope.view = false;

    $scope.loading = "true";
    console.log("Inside controller");

    $scope.view = !$scope.view;
    dispUser.getDispUser().then(function(response) {
        console.log("Success message")
        $scope.loading = "false";
        $scope.users = response.data.data.output;

        $scope.view = true;
    }, function(response) {
        window.alert('No users found');
    });

    $scope.orderByThis = function(x) {
        $scope.order = x;
    }
    $scope.users = {};
    $scope.userDetails = {};

});