var app = angular.module('CSREvents');
//attendence controller



//assign location controller


//eventRegistration
app.controller("registratonEventController", function($scope, $http, $window, $filter, place, insertEvent) {

    $scope.status = "cont";
    //$scope.retrieve=function()
    //{
    $scope.status = "in";
    $scope.successDisplay = false;
    $scope.warningDisplay = false;
    $scope.sucess = false;
    place.getPlace().then(function(response) {
        $scope.status = "in1";
        $scope.places = response.data.data.output;
    }, function(response) {
        $scope.status = "in2";
        $scope.error = response.statusText;
    })
    $scope.myClick = function(eveName, desp, eveDate, eveLead) {

        $scope.sucess = true;
        var index = $scope.selectedPlaceId.indexOf(",");
        var placeId = $scope.selectedPlaceId.substring(0, index);

        var a = $filter('date')(eveDate, "MM-dd-yyyy");

        var data = {
            eventName: eveName,
            placeId: placeId,
            description: desp,
            eventDate: a,
            eventLead: eveLead,


        };


        var jdata = JSON.stringify(data);




        insertEvent.setInsertEvent(jdata).then(function(response) {

            $scope.message = "Event Sheduled sucessfully";
            $scope.successDisplay = "true";
            $scope.sucess = false;
            //  $window.location.href = '/user';
            // $location.path('/user');
        }, function(response) {
            $scope.message = "Event Not Sheduled";
            $scope.warningDisplay = true;

        });

    }
    //}
});