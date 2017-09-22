(function() {
        'use strict';
        angular.module('CSREvents', ['nxn.ui', 'nxn.common', 'NexenCommon']).

        constant('NavEntitleFn', entitled).
        config(ConfigFn).
        run(RunFn);


        ConfigFn.$inject = ['nxn.RouterProvider', 'NavEntitleFn'];
        RunFn.$inject = ['NavBar', 'NavEntitleFn'];

        function ConfigFn(nxnRouterProvider, NavEntitleFn) {
            nxnRouterProvider.state('displayPlaces', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/pluginTest',
                templateUrl: 'partials/CSREvents/places.html',
                controller: 'displayPlaceController',
                enable: NavEntitleFn
            });



            nxnRouterProvider.state('registerPlace', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/regPlace.html',
                controller: 'registerPlaceController',
                enable: NavEntitleFn
            });
            nxnRouterProvider.state('usersOfficial', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/dispAll.html',
                controller: 'displayUserController',
                enable: NavEntitleFn
            });

            nxnRouterProvider.state('editUser', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/editUserDetails.html',
                controller: 'editUserController',
                enable: NavEntitleFn
            });
            nxnRouterProvider.state('attendence', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/attendence.html',
                controller: 'attendenceEventController',
                enable: NavEntitleFn
            });
            nxnRouterProvider.state('assignLoaction', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/assignLocation.html',
                controller: 'locationEventController',
                enable: NavEntitleFn
            });
            nxnRouterProvider.state('userRegistration', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/usersRegistration.html',
                controller: 'registerUserController',
                enable: NavEntitleFn
            });
            nxnRouterProvider.state('eventRegistration', {
                parentNavId: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                url: '/plugin',
                templateUrl: 'partials/CSREvents/eventRegistration.html',
                controller: 'registratonEventController',
                enable: NavEntitleFn
            });



        }

        function RunFn(Navbar, NavEntitleFn) {
            Navbar.setNavbarItems([{
                    id: 'df0224fc-7201-11e7-8cf7-a6006ad3dba0',
                    entitled: NavEntitleFn
                },

                {
                    id: 'df022786-7201-11e7-8cf7-a6006ad3dba0',
                    entitled: NavEntitleFn
                },
                {
                    id: "df022894-7201-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                }, {
                    id: "8b92409a-72dd-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                },
                {
                    id: "df022c54-7201-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                }, {
                    id: "3e312332-72ad-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                }, {
                    id: "cbff519c-7344-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                },
                {
                    id: "cbff5570-7344-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                },
                {
                    id: "9fb2488a-7347-11e7-9978-a6006ad3dba0",
                    entitled: NavEntitleFn
                }, {
                    id: "5de1e3fe-7354-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                }, {
                    id: "5de1e69c-7354-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                },
                {
                    id: " 5de1e7a0-7354-11e7-8cf7-a6006ad3dba0",
                    entitled: NavEntitleFn
                }, {
                    id: " ab9005a0-75bf-11e7-b5a5-be2e44b06b34",
                    entitled: NavEntitleFn
                },
                {
                    id: "ab900852-75bf-11e7-b5a5-be2e44b06b34",
                    entitled: NavEntitleFn
                }




            ]);
        }

        function entitled(ctx) {
            return ctx.hasExactEntitlement('ADMIN');
        }


    }

)();