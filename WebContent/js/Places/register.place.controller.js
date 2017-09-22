var app = angular.module('CSREvents');

var place;

app.controller("registerPlaceController", function($scope, $window, $http, placeReg) {
    $scope.user = {
        'from': '',
        'fromLat': '',
        'fromLng': ''
    };
    var options = {
        componentRestrictions: {
            country: "in"
        }
    };
    var inputFrom = document.getElementById('from');

    //document.getElementById('from');
    var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);
    google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
        //$window.alert($scope.place_start);
        place = autocompleteFrom.getPlace();
        $scope.user.fromLat = place.geometry.location.lat();
        $scope.user.fromLng = place.geometry.location.lng();
        $scope.user.from = place.address_components[1].long_name;
        $scope.$apply();
    });


    $scope.hi = 3;
    $scope.register = function() {
        var data = {
            name: $scope.placeName,
            address: place.formatted_address,
            location: $scope.user.from,
            contactNumber: $scope.number
        };

        var jsonData = JSON.stringify(data);
        //alert("APp")
        //alert(jsonData+"dsfsdfsdf");

        placeReg.regPlace(jsonData).then(function(response) {
            //$window.alert("Place successfully registered");
            //$scope.message=response.data;
        }, function(response) {
          //  $window.alert("Fail due to cause" + response.data);
        })
    }
});