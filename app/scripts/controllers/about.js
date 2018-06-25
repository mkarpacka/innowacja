'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.texts = [{
      badgeClass: 'info',
      badgeIconClass: ' glyphicon-globe',
      title: 'Digital',
      content: `All information on Blokchain is digitalized, 
                eliminating the need for manual documentation.`
    }, 
    {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-time',
      title: 'Chronological and time-stamped',
      content: `Blokchain as the name suggests is a chain of
                blocks - each being a repository that stores 
                infromation pertaining to a transaction and 
                also links to the previous block in the same transaction.
                These connected blocks form a chronological chain prociding 
                a trail of the underlaying transaction. `
    },
    {
      badgeClass: 'danger',
      badgeIconClass: 'glyphicon-floppy-saved',
      title: 'Cryptographically sealed',
      content: `Blocks created are cryptographically sealed in the chain.
                This means that it become impossible to delete, edit or 
                  copy already created blocks and put it on network, therby creating 
                  true dihgital assets and ensuring a high level of robustness and
                  trust. Futhermore, the decentralized storage in a Blokchain is known to
                  be very failure-resistant. Even in the event of the failure of a large
                  number of network participants, the Blokchain remains available, eliminating the 
                  single point of failure. Data stored in a Blokchain is immutable. `
    },
    {
      badgeClass: 'success',
      badgeIconClass: ' glyphicon-transfer',
      title: 'Consensus-based',
      content: `A transaction on Blokchain can be executed only if all
                the parties on thenetwork unanimously approve it. However, consensus
                based rules can be altered to
                suit varoius circumstances.`
    },
    {
      badgeClass: 'info',
      badgeIconClass: ' glyphicon-cloud-download',
      title: 'Distributed ledger',
      content: `Indistinguishable copies of all information are ahred on the 
                Blokchain. Participants independently validate information without a
                centralized authority. Even if one node fails, the remaining nodes continue 
                to operate, ensuring no disruption. `
    }
    ];
  });
