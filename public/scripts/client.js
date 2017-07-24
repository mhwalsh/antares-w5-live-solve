var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/showListings', {
      templateUrl: 'views/listings.html',
      controller: 'ListingController',
      controllerAs: 'vm'
    }).otherwise('/');
}]);
