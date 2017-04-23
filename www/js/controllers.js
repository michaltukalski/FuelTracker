angular.module('starter.controllers', [])

.controller('FormCtrl', function($scope, Refuelings) {
  $scope.count = function(date, price, mileage, quantity) {
    var usage = quantity/(mileage - Refuelings.getLastMileage());
    Refuelings.add(date, price, mileage, quantity, usage);
  }
})

.controller('HistoryCtrl', function($scope, Refuelings) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.refuelings = Refuelings.all();
  $scope.remove = function(refuel) {
    Refuelings.remove(refuel);
  };
})

.controller('StatsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
