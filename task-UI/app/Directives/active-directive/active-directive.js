'use strict';

angular
    .module('app')
    .directive('active', function () {
        return {
            restrict: 'EAM',
            templateUrl: './app/Directives/active-directive/active-directive.html',
            scope: {
                values: '='
            }
        }
    });