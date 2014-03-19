'use strict';

var services = angular.module('qebms.services', ['ngResource']);

services.factory('Authentication', ['$resource',
    function($resource){
        return $resource('login/login', {}, {});
    }
]);

services.factory('HttpInterceptor', ['$q', 'MessageService',
    function($q, MessageService){
        return {
            'response': function(response){
                return response;
            },
            'responseError': function(rejection){
                switch (rejection.status) {
                    case 401:
                        MessageService.alert(rejection.status,
                            {statusCode: rejection.status, message: ''});
                        break;
                    case 403:
                        MessageService.alert(rejection.status,
                            {statusCode: rejection.status, message: ''});
                        break;
                    case 404:
                        MessageService.alert(rejection.status,
                            {statusCode: rejection.status, message: 'Page not found.'});
                        break;
                    case 500:
                        MessageService.alert(rejection.status,
                            {statusCode: rejection.status, message: 'Internal Server Error'});
                        break;
                    default:
                        MessageService.alert(rejection.status,
                            {statusCode: rejection.status, message: 'Internal Server Error'});
                }
                return $q.reject(rejection);
            }
        };
    }
]);

services.factory('MessageService', ['$rootScope',
    function($rootScope){
        return {
            alert: function(event, args){
                $rootScope.$broadcast(event, args);
            }
        };
    }
]);

