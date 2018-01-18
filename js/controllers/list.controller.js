(function() {

  'use strict';

  angular
  .module('cvc-app')
  .controller('listController', listController);

  listController.$inject = ['carsProvider'];

  function listController(carsProvider) {

    var vm = this;

    vm.cars = [];
    vm.toggleDetails = toggleDetails;

    _init();

    function toggleDetails(car) {
        car.showDetails = !car.showDetails;
    }

    function _init() {

      carsProvider
      .list()
      .then(
        function(data) {
          vm.cars = data;
          vm.cars.forEach(function(car) {
            car.showDetails = false;
          });
        },
        function(err) {
            console.log(err);
        }
      );

    }

  }

})();
