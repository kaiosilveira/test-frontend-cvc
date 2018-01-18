(function() {

  'use strict';

  angular
  .module('cvc-app')
  .factory('carsProvider', carsProvider);

  carsProvider.$inject = ['$q', '$http'];

  function carsProvider($q, $http) {

    var vm = this;
    var MOCKED_DATA = [
      {
          title: 'CARRO ECONÔMICO COM AR',
          taxCode: 'IFMR',
          packDescription: 'CHEVROLET CELTA, FORD FIESTA, VW GOL, FIAT PALIO OU SIMILAR',
          benefits: [ 'Quilometragem livre', 'Seguro total do veículo', 'Seguro a terceiros', 'Taxas de serviços inclusas' ],
          description: 'Super inclusive promocional - Km livre, seguro total do veículo (LDW), seguro a terceiros (SLI), taxas de serviço inclusas e 1 motorista adicional',
          itemsIncluded: [
              [
                { icon: 'car', description: '4 portas'},
                { icon: 'thermometer-half', description: 'Ar condicionado' },
                { icon: 'unsorted', description: 'Vidros Elétricos' }
              ],
              [
                { icon: 'user', description: '5 pessoas' },
                { icon: 'gear', description: 'Automático' },
                { icon: 'play', description: 'CD ou USB' }
              ],
              [
                { icon: 'briefcase', description: '3 malas' },
                { icon: 'road', description: 'Direção Hidráulica' },
                { icon: 'music', description: 'Rádio AM/FM' }
              ]
          ],
          price: 938.00,
          promotionalPrice: 838,
          maxInstallmentsAllowed: 10
      },
      {
          title: 'CARRO ECONÔMICO COM AR',
          taxCode: 'IFMR',
          packDescription: 'CHEVROLET CELTA, FORD FIESTA, VW GOL, FIAT PALIO OU SIMILAR',
          benefits: [ 'Quilometragem livre', 'Seguro total do veículo', 'Seguro a terceiros', 'Taxas de serviços inclusas' ],
          description: 'Super inclusive promocional - Km livre, seguro total do veículo (LDW), seguro a terceiros (SLI), taxas de serviço inclusas e 1 motorista adicional',
          itemsIncluded: [
              [
                { icon: 'car', description: '4 portas'},
                { icon: 'thermometer-half', description: 'Ar condicionado' },
                { icon: 'unsorted', description: 'Vidros Elétricos' }
              ],
              [
                { icon: 'user', description: '5 pessoas' },
                { icon: 'gear', description: 'Automático' },
                { icon: 'play', description: 'CD ou USB' }
              ],
              [
                { icon: 'briefcase', description: '3 malas' },
                { icon: 'road', description: 'Direção Hidráulica' },
                { icon: 'music', description: 'Rádio AM/FM' }
              ]
          ],
          price: 938.00,
          promotionalPrice: 838,
          maxInstallmentsAllowed: 10
      },
      {
          title: 'CARRO ECONÔMICO COM AR',
          taxCode: 'IFMR',
          packDescription: 'CHEVROLET CELTA, FORD FIESTA, VW GOL, FIAT PALIO OU SIMILAR',
          benefits: [ 'Quilometragem livre', 'Seguro total do veículo', 'Seguro a terceiros', 'Taxas de serviços inclusas' ],
          description: 'Super inclusive promocional - Km livre, seguro total do veículo (LDW), seguro a terceiros (SLI), taxas de serviço inclusas e 1 motorista adicional',
          itemsIncluded: [
              [
                { icon: 'car', description: '4 portas'},
                { icon: 'thermometer-half', description: 'Ar condicionado' },
                { icon: 'unsorted', description: 'Vidros Elétricos' }
              ],
              [
                { icon: 'user', description: '5 pessoas' },
                { icon: 'gear', description: 'Automático' },
                { icon: 'play', description: 'CD ou USB' }
              ],
              [
                { icon: 'briefcase', description: '3 malas' },
                { icon: 'road', description: 'Direção Hidráulica' },
                { icon: 'music', description: 'Rádio AM/FM' }
              ]
          ],
          price: 938.00,
          promotionalPrice: 838,
          maxInstallmentsAllowed: 10
      }
    ];

    vm.get = get;
    vm.list = list;

    function get() { }

    function list() {

      var deferred = $q.defer();

      setTimeout(function() {
        deferred.resolve(MOCKED_DATA);
      }, 100);

      return deferred.promise;

    }

    return vm;

  }

})();
