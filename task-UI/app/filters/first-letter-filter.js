'use strict';

angular.module('app').filter('findfirstlet', function () {
    return function (word) {
        var first = '';
        if (typeof word === 'string' || word instanceof String) {

            first = word.charAt(0);

            return first;
        }
        else {
            return first;
        }
    }
});