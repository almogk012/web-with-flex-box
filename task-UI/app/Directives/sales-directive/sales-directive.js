'use strict';

angular
    .module('app')
    .directive('sales', function () {
        return {
            restrict: 'EA',
            templateUrl: './app/Directives/sales-directive/sales-directive.html',
            scope: {
                values: '='
            }
        }
    });