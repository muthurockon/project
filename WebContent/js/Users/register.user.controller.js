var app = angular.module('CSREvents');
app.controller("registerUserController", function($scope, $window, $http, $filter, insertUser, insertUserDetails) {

    $scope.designation = ["TRAINEE", "OTHER"];
    $scope.sucess = false;
    $scope.myClick = function(id, emailId, joiningDate, name, perEmail, phNumber, places) {


        $scope.successDisplay = 'false';
        $scope.warningDisplay = false;
        $scope.sucess = true;
        var a = $filter('date')(joiningDate, "MM-dd-yyyy");

        var data = {
            commitId: id,
            inautixEmail: emailId,

            deignation: $scope.selectedDesignation,
            dateOfJoining: a,

        };

        var details = {
            commitId: id,
            userName: name,
            personalEmail: perEmail,
            phoneNumber: phNumber,
            location: $scope.user.from,

        };
        var jdata = JSON.stringify(data);
        var jdetails = JSON.stringify(details);



        insertUser.setUser(jdata).then(function(response) {


            insertUserDetails.setUserDetails(jdetails).then(function(response) {

                $scope.message = "Sucessfully Registered";
                $scope.successDisplay = 'true';
                $scope.sucess = false;
                // $location.path('/user');
            }, function(response) {
                $scope.message = "Not Registered"
                $scope.warningDisplay = true;
                $scope.sucess = false;
            })
            //  $window.location.href = '/user';
            // $location.path('/user');
        }, function(response) {
            $scope.sucess = false;
            $scope.message = "Not Registered"
            $scope.warningDisplay = true;

        })

    }

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
        $scope.user.from = place.address_components[0].long_name;
        $scope.$apply();
    });
    //end of google
    //remaining controller code here

});