var app = angular.module('CSREvents');
app.controller('locationEventController', function($scope, $http, $location, $window, $filter, recordDisp, assignLocation) {
    $scope.viewAssignDate = false;
    $scope.locDetails = false;
    $scope.locationDisplay = false;
    $scope.users = {};
    var dateofJoining;
    $scope.loading = "true";
    console.log("Inside Select single controller");
    /* $scope.showDate=function(){
         $scope.viewAssignDate=!$scope.viewAssignDate;
     }*/
    $scope.finalized = function() {

        dateofJoining = $filter('date')($scope.dateOfJoining, "MM-dd-yyyy");
        recordDisp.getRecordDisp(dateofJoining).then(function(response) {
            console.log("Success message")
            $scope.loading = "false";
            $scope.users = response.data.data.output;
            $scope.assignedLocDisplay = false;
            $scope.locDetails = true;
            //window.alert("sucess");
        }, function(response) {
            window.alert('No users found');
            $scope.locDetails = false;
            $scope.assignedLocDisplay = false;
            $scope.view1 = false;
        });



    }
    $scope.locationAssignment = function() {
        //  $scope.optionDate=!$scope.optionDate;
        //   $scope.locationDisplay=!$scope.locationDisplay;
        assignLocation.getAssignLocation(dateofJoining).then(function(response) {
            console.log("Success message123")
            $scope.users = response.data.data.output;
            $scope.locDetails = false;
            $scope.assignedLocDisplay = true;
            //window.alert("Location assigned successfully");
        }, function(response) {
            //window.alert('No users found');
            $scope.locDetails = false;
            $scope.assignedLocDisplay = false;
            $scope.view1 = false;
        });



    }




});