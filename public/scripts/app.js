var app = angular.module('abApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/steven.html',
    controller: 'StevenController as sc'
  }).when('/jack', {
    templateUrl: 'views/partials/jack.html',
    controller: 'JackController as jc'
  }).when('/breakout', {
    templateUrl: 'views/partials/breakout.html',
    controller: 'BreakoutController as bc'
  });
});

app.controller('StevenController', StevenController);
app.controller('JackController', JackController);
app.controller('BreakoutController', BreakoutController);

function StevenController() {
  console.log('StevenController is loaded');
}

function JackController() {
  console.log('JackController is loaded');
}

function BreakoutController() {
  console.log('BreakoutController is loaded');
}
