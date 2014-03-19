'use strict';

var controllers = angular.module('qebms.controllers', ['qebms.services',
                                                    'qebms.directives']);


controllers.controller('HomeCtrl', ['$scope', '$state',
    function($scope, $state){
        $scope.message = "from home controller";
    }
]);

controllers.controller('MasterCtrl', ['$scope', '$state',
    function($scope, $state){
        $scope.message = "from master";
    }
]);

controllers.controller('TransactionCtrl', ['$rootScope', '$scope', '$state',
    'Authentication', 'MessageService',
    function($rootScope, $scope, $state, Authentication, MessageService){
        $scope.login = function(){
            console.log($scope.username);
            console.log($scope.password);
            var authentication = new Authentication({username: $scope.username,
                                    password: $scope.password});
            authentication.$save(authentication, function(response){
                console.log(response.userName);
                MessageService.alert('success', {message: 'User found.'});
            });
        };
    }
]);

controllers.controller('ResourceCtrl', ['$scope',
    function($scope){
        $scope.message = "from resource controller";
    }
]);

controllers.controller('Tab2Ctrl', ['$scope',
    function($scope){
        $scope.message = "from tab2 controller";
    }
]);