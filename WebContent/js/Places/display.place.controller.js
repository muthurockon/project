var app = angular.module('CSREvents');

// display controller

app.controller("displayPlaceController", function($scope, $http, place) {

    $scope.status = "cont";
    $scope.loading = "true";
    place.getPlace().then(function(response) {

        $scope.loading = "false";
        $scope.status = "in1";
        $scope.places = response.data.data.output;

    }, function(response) {
        $scope.status = "in2";
        $scope.error = response.statusText;

    });
    $scope.deletePlace = function(placeId) {

        deletePlace.getDelPlace(placeId).then(function(response) {

            place.getPlace().then(function(response) {

                $scope.status = "in1";
                $scope.places = response.data.data.output;

            }, function(response) {
                $scope.status = "in2";
                $scope.error = response.statusText;

            });
        }, function(response) {
            window.alert("Fail");
        })
    }

});