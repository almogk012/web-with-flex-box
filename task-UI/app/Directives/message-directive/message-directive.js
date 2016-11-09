'use strict';

angular
    .module('app')
    .directive('message', function () {
        return {
            restrict: 'EA',
            templateUrl: './app/Directives/message-directive/message-directive.html',
            scope: {
                values: '='
            }
        }
    });