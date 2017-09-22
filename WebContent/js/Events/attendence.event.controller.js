var app = angular.module('CSREvents');


app.controller('attendenceEventController', function($scope, $http, attendenceDetails, dispUser) {
    $scope.viewAttrendence = false;
    $scope.selectVal = 1;
    $scope.users = {};
    $scope.userDetails = {};
    var attendence = [];
    $scope.loading = true;
    $scope.successDisplay = false;
    $scope.sucess = false;
    console.log("Inside controller");

    dispUser.getDispUser().then(function(response) {
        console.log("Success message")
        $scope.loading = "false";
        $scope.users = response.data.data.output;
        $scope.viewAttrendence = true;
    }, function(response) {
        window.alert('No users found');
    });


    $scope.submitAttendence = function() {
        $scope.sucess = true;
        attendence = [];
        var k = 0;
        for (var i = 0; i < $scope.users.length; i++) {

            if (document.getElementById($scope.users[i].commitId + 'p').checked) {
                //$scope.attendence[i]=$scope.users[i].commitId;
                attendence.push($scope.users[i].commitId);
                if ($scope.users[i].weeksPending != 0)
                    $scope.users[i].weeksPending--;

            }

        }
        var jdata = JSON.stringify(attendence);

        attendenceDetails.getAttendence(jdata).then(function(response) {

            $scope.message = "Updated Successfully";
            $scope.successDisplay = "ture";
            $scope.sucess = false;

            //  $window.location.href = '/user';
            // $location.path('/user');
        }, function(response) {
            $scope.message = "Not Updated"

        });



    }

    $scope.orderByThis = function(x) {
        $scope.order = x;
    }

});