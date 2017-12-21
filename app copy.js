let app = angular.module('app', ['ui.router']);

app.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: '/views/home.html'
        })
        .state('feed', {
            url: '/feed',
            templateUrl: '/views/feed.html',
            controller: 'feedCtrl'
        })
})


.app.controller('feedCtrl', function($scope, $http){
    $scope.posts;

    $http({
        method; 'GET',
        url: '/data.json'
    }).then(function(response){
        console.log(response);
    })
});

app.component('navbar', {
    templateUrl: '/components/navbar.html'
})
