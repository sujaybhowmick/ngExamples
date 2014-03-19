'use strict';

var app = angular.module('qebmsApp', ['ui.router',
                'qebms.directives', 'qebms.services', 'qebms.controllers']);

/*app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'TabsCtrl',
            templateUrl: 'js/app/views/tabs.html'
        });
}]);*/

/* angular-ui-router config */

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider.
            state('home', {
            url: '/home',
            templateUrl: 'js/app/views/home.html',
            controller: 'HomeCtrl'
        }).state('masters', {
            url: '/masters',
            templateUrl: 'js/app/views/masters.html',
            controller: 'MasterCtrl'
       }).state('transactions', {
            url: '/transactions',
            templateUrl: 'js/app/views/transactions.html',
            controller: 'TransactionCtrl'
       }).state('masters.resource',{
            url: '/resource',
            templateUrl: 'js/app/views/masters.resource.html',
            controller: 'ResourceCtrl'

        }).state('masters.tab2',{
            url: '/tab2',
            templateUrl: 'js/app/views/masters.tab2.html',
            controller: 'Tab2Ctrl'
        });

    }
]).config(['$httpProvider', '$compileProvider',
        function($httpProvider, $compileProvider){
            $httpProvider.interceptors.push('HttpInterceptor');

}]).run(['$rootScope', '$location', '$state', '$stateParams',
        function($rootScope, $location, $state, $stateParams){
            var path = function() {
                return $location.path();
            };

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$watch(path, function(newVal, oldVal){


            if($state.current.name === 'masters'){
                $state.go($state.current.name + '.resource');
            }

        });
    }]);
