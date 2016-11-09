'use strict';

$(document).ready(function () {

    $('#usersModal').click(function () {
        $('#myModal1').appendTo("body").modal('show');
    });
    $('.menu-toggle').click(function () {
        if ($('.main').hasClass('position')) {
            $('.main').removeClass('position')
        }
        else {
            $('.main').addClass('position');
        }
    });
    var audio = $("audio")[0];
    $(".fa-bell").mouseenter(function () {
        audio.play();
    });

});

angular
    .module('app')
    .controller('main-controller', function ($scope, $window) {

        $scope.state = false;

        $scope.toggleState = function () {
            $scope.state = !$scope.state;
        };

        $scope.mailTo = function () {
            $window.location = 'mailto:almogk012@gmail.com';
        };

        $scope.messagesJSON = [
            {name: 'Nina Jones', time: '2 seconds ago', massage: 'Thank you for the opportunity'},
            {name: 'Joe Ellen', time: '27 minutes ago', massage: 'Thank you for the opportunity'},
            {name: 'Michael Jeffrey Jordan', time: '9 hours ago', massage: 'Thank you for the opportunity'},
            {name: 'Donald John Trump', time: '2 days ago', massage: 'Thank you for the opportunity'},
            {name: 'Donald John Trump', time: '4 days ago', massage: 'Hello !'},
            {name: 'Donald John Trump', time: '2 mounths ago', massage: 'Come to my party'}
        ];

        $scope.activityJSON = [
            {name: 'Nina Jones', time: 'Just now', massage: 'added new project'},
            {name: 'Joe Ellen', time: '40 minutes ago', massage: 'change profile picture'},
            {name: 'Donald John Trump', time: '1 hour ago', massage: 'log in after 1 year'}
        ];

        $scope.tasksJSON = [
            {title: 'New website for Symu.co', time: '20 seconds ago'},
            {title: 'Free business PSD Template', time: '2 minutes ago'},
            {title: 'New logo for JCD.pl', time: '40 minutes ago'},
            {title: 'Free icons Set vol.3', time: '3 days ago'},
            {title: 'Do the homework ', time: '5 days ago'}

        ];

        $scope.usersJSON = [
            {name: 'User1', phone: '052-4692746', email: 'user1@gmail.com'},
            {name: 'User2', phone: '050-2869472', email: 'user2@gmail.com'},
            {name: 'User3', phone: '054-7857396', email: 'user3@gmail.com'},
            {name: 'User4', phone: '052-7358645', email: 'user4@gmail.com'},
            {name: 'User5', phone: '052-7535823', email: 'user5@gmail.com'},
            {name: 'User6', phone: '050-7259675', email: 'user6@gmail.com'}
        ];

        $scope.salesJSON = [
            {category: 'Websites'},
            {category: 'Logo'},
            {category: 'Social Media'},
            {category: 'Adwords'},
            {category: 'E-Commerce'}
        ]
    });