var myApp = angular.module('myApp', []);

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
