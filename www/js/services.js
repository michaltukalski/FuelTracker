angular.module('starter.services', [])

.factory('Refuelings', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var refuelings = [{
    date: '23.04.2017',
    price: 4.20,
    mileage: 100,
    quantity: 36.3,
    usage: 6.3
  }, {
    date: '17.04.2017',
    price: 4.24,
    mileage: 71600,
    quantity: 40.3,
    usage: 6.3
  }];

  return {
    all: function() {
      return refuelings;
    },
    remove: function(refueling) {
      refuelings.splice(refuelings.indexOf(refueling), 1);
    },

    add: function(_date, _price, _milage, _quantity, _usage){
      var toAdd = {
        date: _date,
        price: _price,
        mileage: _milage,
        quantity: _quantity,
        usage: _usage
      };
      refuelings.unshift(toAdd);
    },

    getLastMileage: function(){
      return refuelings[0].mileage;
    }

  };
});
