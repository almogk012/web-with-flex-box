'use strict';

angular
    .module('app')
    .directive('friendsUser', function () {
        return {
            restrict: 'EAM',
            templateUrl: './app/Directives/user-directive/user-directive.html',
            scope: {
                values: '='
            }
        }
    });