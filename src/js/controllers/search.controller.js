(function() {

  'use strict';

  angular
  .module('cvc-app')
  .controller('searchController', searchController);

  function searchController() {

    var vm = this;

    vm.hours = [];

    vm.searchFilters = {
      placeToTake: '',
      devolutionPlace: '',
      startDate: new Date(),
      startHour: '',
      endDate: new Date(),
      endHour: '',
      includeFlight: false,
      includeHotel: false,
      samePlaceDevolution: false
    };

    vm.listFilters = {
      itemsByPage: 50,
      orderBy: '',
      currency: ''
    };

    vm.search = search;

    function search() { }

    _init();

    function _init() {

      for (var i = 9; i <= 18; i++) {
        for (var j = 0; j < 2; j++) {
          vm.hours.push({ _id: [i, j].join(''), description: [i, j == 0 ? '00' : '30'].join(':') });
        }
      }

    }

  }

})();
