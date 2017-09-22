var app = angular.module('CSREvents');
app.controller('editUserController', function($scope, $http, $log, $timeout, selectUser, selectUserDetails, editUser, editUserDetails, deleteUser, deleteUserDetails) {
    $scope.view1 = false;
    $scope.successDisplay = false;
    $scope.warningDisplay = false;
    $scope.access = true;
    $scope.options = false;
    $scope.users = {};
    $scope.userDetails = {};
    $scope.backUpChange = [];
    $scope.loading = false;
    console.log("Inside Select single controller");
    $scope.selecrUser = function() {
        // $scope.view1=true;
        $scope.loading = true;
        $scope.backUpChange = [];
        selectUser.getEditUsers($scope.commitId).then(function(response) {
            console.log("Success message")
            $scope.users = response.data.data.output;
            $scope.view1 = true;
            $scope.backUpChange.push($scope.users[0].deignation);


        }, function(response) {
            window.alert('No users found');
            $scope.warningDisplay = true;
            $scope.warningMessage = "Record not found";
            $timeout(function() {
                $scope.warningDisplay = false;
            }, 3000);
            $scope.view1 = false;
        });
        selectUserDetails.getEditUserDetails($scope.commitId).then(function(response) {
            console.log("Success message")
            $scope.userDetails = response.data.data.output;
            $scope.view1 = true;
            $scope.backUpChange.push($scope.userDetails[0].personalEmail);
            $scope.backUpChange.push($scope.userDetails[0].phoneNumber);
            $scope.backUpChange.push($scope.userDetails[0].location);
            console.log($scope.userDetails);
            var temp = JSON.stringify($scope.backUpChange);
            $scope.loading = "false";
        }, function(response) {
            window.alert('No users found');
            $scope.warningDisplay = true;
            $scope.warningMessage = "Record not found";
            $timeout(function() {
                $scope.warningDisplay = false;
            }, 3000);
            $scope.view1 = false;
        });
        $scope.editing = function() {
            $scope.access = false;
            $scope.viewSave = true;

        }

        $scope.updating = function() {
            $scope.access = true;
            console.log($scope.userDetails[0].personalEmail);
            var details = {
                phoneNumber: $scope.userDetails[0].phoneNumber,
                personalEmail: $scope.userDetails[0].personalEmail,
                location: $scope.userDetails[0].location,
            };
            var data = {
                deignation: $scope.users[0].deignation,
            };
            var jdata = JSON.stringify(data);
            var jdetails = JSON.stringify(details);
            //$http.put('http://localhost:8080/CSREvent/users/'+$scope.commitId, jdata)
            editUser.updateUser($scope.commitId, jdata).then(function(response) {

                $scope.message = "updated Successfully";

            });
            // $http.put('http://localhost:8080/CSREvent/user-details/'+$scope.commitId, jdetails)
            editUserDetails.updateUserDetails($scope.commitId, jdetails).then(function(response) {

                $scope.successMessage = "Updated Successfully";
                $scope.successDisplay = true;
                $timeout(function() {
                    $scope.successDisplay = false;
                }, 3000);
                console.log($scope.message);

                // $location.path('/user');
            });
            $scope.viewSave = false;
            $scope.access = true;
            //  $scope.selecrUser();
        }
        $scope.cancelUpdating = function() {

            $scope.access = true;
            $scope.viewSave = false;
            $scope.users[0].deignation = $scope.backUpChange[0];
            $scope.userDetails[0].personalEmail = $scope.backUpChange[1];
            $scope.userDetails[0].phoneNumber = $scope.backUpChange[2];
            $scope.userDetails[0].location = $scope.backUpChange[3];
            //  $scope.selecrUser();
        }


    }
    $scope.deleteUser = function() {


        deleteUser.getDeleteUser($scope.commitId).then(function(response) {
            console.log("Success message-Deleted Successfully")
            $scope.message = "Deleted Successfully";
            $scope.successDisplay = true;
            $timeout(function() {
                $scope.warningDisplay = false;
            }, 3000);
        }, function(response) {

            $scope.warningDisplay = true;
            $scope.warningMessage = "Record not found";
            $timeout(function() {
                $scope.warningDisplay = false;
            }, 3000);
            $scope.message = "Record not found";
            $scope.view2 = false;
        });
        deleteUserDetails.getDeleteUserDetails($scope.commitId).then(function(response) {
            console.log("Success message-Deleted Successfully")
            $scope.message = "Deleted Successfully";
        }, function(response) {
            $scope.message = "Record not found";
            $scope.view2 = false;
        });
    }
    $log.log($scope.users.commitId);
});