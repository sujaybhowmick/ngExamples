'use strict';

var directives = angular.module('qebms.directives', []);

directives.directive('appErrorMessages', function(){
    var fnLink = function(scope, element, attributes){
        scope.$on('500', function(event, args){
            var template =  '<div class="alert alert-danger alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.statusCode + ' - ' + args.message + '</strong></div>'
            element.html(template);
        });

        scope.$on('404', function(event, args){
            var template =  '<div class="alert alert-danger alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.statusCode + ' - ' + args.message + '</strong></div>'
            element.html(template);
        });

    };
    return {
        restrict: 'A',
        link: fnLink,
        replace: true
    }
});

directives.directive('appMessages', function($compile){
    var fnLink = function(scope, element, attributes){
        scope.$on('success', function(event, args){
            var template =  angular.element('<div class="alert alert-success alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.message + '</strong></div>');
            template.insertAfter(element);
            $compile(template)(scope).delay(3000).fadeOut('slow', function() { $(this).remove(); });
        });

        scope.$on('error', function(event, args){
            var template =  angular.element('<div class="alert alert-warning alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.message + '</strong></div>');
            template.insertAfter(element);
            $compile(template)(scope);
        });

    };
    return {
        restrict: 'A',
        link: fnLink,
        replace: false
    }
});