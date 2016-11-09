'use strict';

angular
    .module('app')
    .directive('task', function () {
        return {
            restrict: 'EAM',
            templateUrl: './app/Directives/task-directive/task-directive.html',
            scope: {
                values: '='
            }
        }
    });