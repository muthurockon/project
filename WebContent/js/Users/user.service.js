var app = angular.module('CSREvents');



app.factory('dispUser', function($http) {
    return {
        getDispUser: function() {
            return $http({

                method: 'GET',

                url: 'http://localhost:8080/CSREvent/users'

            });
        }
    }
});



app.factory('selectUser', function($http) {
    return {
        getEditUsers: function(commitId) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/CSREvent/users/' + commitId

            });

        }



    }
});



app.factory('selectUserDetails', function($http) {
    return {
        getEditUserDetails: function(commitId) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/CSREvent/user-details/' + commitId

            });
        }



    }
});
app.factory('deleteUser', function($http) {
    return {
        getDeleteUser: function(commitId) {
            return $http({
                method: 'DELETE',
                url: 'http://localhost:8080/CSREvent/users/' + commitId

            });

        }



    }
});

app.factory('deleteUserDetails', function($http) {
    return {
        getDeleteUserDetails: function(commitId) {
            return $http({
                method: 'DELETE',
                url: 'http://localhost:8080/CSREvent/user-details/' + commitId

            });
        }



    }
});
app.factory('insertUser', function($http) {
    return {
        setUser: function(jsonData) {
            return $http({

                    method: 'POST',

                    url: 'http://localhost:8080/CSREvent/users',

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});
app.factory('insertUserDetails', function($http) {
    return {
        setUserDetails: function(jsonData) {
            return $http({

                    method: 'POST',

                    url: 'http://localhost:8080/CSREvent/user-details',

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});


app.factory('editUser', function($http) {
    return {
        updateUser: function(commitId, jsonData) {
            return $http({

                    method: 'PUT',

                    url: 'http://localhost:8080/CSREvent/users/' + commitId,

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});
app.factory('editUserDetails', function($http) {
    return {
        updateUserDetails: function(commitId, jsonData) {
            return $http({

                    method: 'PUT',

                    url: 'http://localhost:8080/CSREvent/user-details/' + commitId,

                    data: jsonData,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );
        }
    }
});