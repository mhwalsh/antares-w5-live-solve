var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/showListings', {
      templateUrl: 'views/listings.html',
      controller: 'ListingController',
      controllerAs: 'vm'
    }).otherwise('/');
}]);

myApp.controller('ListingController', function($http) {
  var vm = this;
  $http({
    method: 'GET',
    url: '/listing'
  }).then(function(result) {
    console.log(result.data);
    vm.listingData = result.data;
  })
});
