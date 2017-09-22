var app = angular.module('CSREvents');


app.factory('insertEvent', function($http) {
    return {
        setInsertEvent: function(jsonData) {
            return $http({

                    method: 'POST',

                    url: 'http://localhost:8080/CSREvent/events',

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});

app.factory('attendenceDetails', function($http) {
    return {
        getAttendence: function(jdata) {
            return $http({

                method: 'POST',

                url: 'http://localhost:8080/CSREvent/attendence-records',

                data: jdata,
                headers: {

                    "Content-Type": "application/json"

                }

            });
        }
    }
});


app.factory('assignLocation', function($http) {
    return {
        getAssignLocation: function(dateofJoining) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/CSREvent/records/' + dateofJoining

            });
        }
    }
});

//event service

app.factory('insertEvent', function($http) {
    return {
        setInsertEvent: function(jsonData) {
            return $http({

                    method: 'POST',

                    url: 'http://localhost:8080/CSREvent/events',

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});


app.factory('recordDisp', function($http) {
    return {
        getRecordDisp: function(dateofJoining) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/CSREvent/records-view/' + dateofJoining

            })
        }
    }
});
app.factory('insertEvent', function($http) {
    return {
        setInsertEvent: function(jsonData) {
            return $http({

                    method: 'POST',

                    url: 'http://localhost:8080/CSREvent/events',

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});