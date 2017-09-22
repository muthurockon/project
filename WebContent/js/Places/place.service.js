var app = angular.module('CSREvents');

// display controller

app.factory('place', function($http) {
    return {
        getPlace: function() {

            return $http.get("http://localhost:8080/CSREvent/places")
        }
    };



});

app.factory('placeReg', function($http) {
    return {
        regPlace: function(jsonData) {
            return $http({

                    method: 'POST',

                    url: 'http://localhost:8080/CSREvent/places',

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});