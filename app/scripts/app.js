'use strict';

angular.module('animAlikeApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        template : '<div></div>',
                        controller  : 'FormController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })

                    // routes
            .state('app.main', {
                url:'main',
                views: {
                    'content@': {
                        templateURL: 'views/main.html',
                        controller  : 'FormController'
                   }
                }
            })
            .state('app.openFace', {
                url:'aboutus',
                views: {
                    'content@': {
                        template: '<h1>To be Completed</h1>'
                   }
                }
            })
            .state('app.vidTry', {
                url:'vidTry',
                views: {
                    'content@': {
                        templateURL: 'views/vidTry.html',
                        controller  : 'vidTryController'
                   }
                }
            })
                    // route for the contactus page
            .state('app.stats', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'
                     }
                }
            })

            // route for the menu page
            .state('app.entries', {
                url: 'entries',
                views: {
                    'content@': {
                        templateUrl : 'views/entries.html',
                        controller  : 'EntriesController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.entry', {
                url: 'entries/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/entry.html',
                        controller  : 'EntryController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })
  // .config(function($routeProvider) {
  //       $routeProvider
  //           // route for the contactus page
  //           .when('/', {
  //               templateUrl : 'views/main.html',
  //               controller  : 'FormController'
  //           })
  //           // route for the menu page
  //           .when('/entries', {
  //               templateUrl : 'views/entries.html',
  //               controller  : 'EntriesController'
  //           })
  //           // route for the dish details page
  //           .when('/entries/:id', {
  //               templateUrl : 'views/entry.html',
  //               controller  : 'EntryController'
  //           })
  //
  //           .when('/vidTry',{
  //             templateUrl:'views/vidTry.html',
  //             controller: 'vidTryController'
  //           })
  //
  //           .otherwise('/');
  //
  //   })
// .config(function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//
//             // route for the home page
//             .state('app', {
//                 url:'/index',
//                 views: {
//                     'header': {
//                         templateUrl : 'views/header.html',
//                         controller  : 'HeaderController'
//                     },
//                     'content': {
//                         templateUrl : 'views/main.html',
//                         controller  : 'HomeController'
//                     },
//                     'footer': {
//                         templateUrl : 'views/footer.html',
//                     }
//                 }
//
//             })
//
//             // route for the aboutus page
//             .state('app.entries', {
//                 url:'entries',
//                 views: {
//                     'content@': {
//                         templateUrl : 'views/entries.html',
//                         controller  : 'EntriesController'
//                     }
//                 }
//             })
//
//
//
//             // route for the dishdetail page
//             .state('app.entry', {
//                 url: 'entry',
//                 views: {
//                     'content@': {
//                         templateUrl : 'views/entry.html',
//                         controller  : 'EntryController'
//                    }
//                 }
//             });
//
//
//         $urlRouterProvider.otherwise('/');
//     })
;
