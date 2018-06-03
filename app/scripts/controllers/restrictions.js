'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:RestrictionsCtrl
 * @description
 * # RestrictionsCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('RestrictionsCtrl', function ($scope) {
    var titleEN = 'Restrictions';
    var introductionEN = `Previous pages brought all the pieces together and yielded an overview of the
    blockchain as a whole, highlighting the interdependency of its underlying
    technical concepts. As a result, we concluded that the blockchain is a complex
    and highly sophisticated technical construct. However, the blockchain is
    neither perfect nor free of limitations.
    These are most important limitations of the blockchain`;
    var elementsEN = [
      {
        title: 'Lack of Privacy',
        content: `The blockchain is a purely distributed peer-to-peer ledger that maintains the
        whole history of transaction data. All transaction details such as the goods and
        the amount being transferred, the involved accounts, and the time of transfer are
        accessible to everyone.1 This is necessary in order to allow every peer to clarify
        ownership and to verify new transactions (e.g., by identifying double-spending
        attacks). Hence, the lack of privacy is a constituting element of the blockchain.`,
        id: '1'
      },
      {
        title: 'The Security Model',
        content: `The blockchain utilizes asymmetric cryptography for identification,
        authentication of users, and for authorizing transactions. Account numbers in the
        blockchain are actually public cryptographic keys.
        The private key is the only security instrument that
        authorizes the lawful owner. As soon as the private key of an account is given to
        some else, either on purpose, by accident, by mistake, or due to data robbery, the
        security for that individual account is broken.`,
        id: '2'
      },
      {
        title: 'High Costs',
        content: `Solving the hash puzzle or providing the proof of work is computationally expensive on
        purpose. It is the security measure that makes the history of transaction data
        immutable. The computational costs can be expressed in a variety of scales such
        as the number of computational cycles, physical time, electrical energy, and
        money. However, the result is always the same: The proof of work is expensive.
        Hence, the whole blockchain incurs costs. The magnitude of these costs depends
        on the difficulty of the hash puzzles.`,
        id: '3'
      },
      {
        title: 'Lack of Flexibility',
        content: `The blockchain is a complex technical construct that consists of a variety of
        concepts and protocols that are optimized and adopted to one another. Changing
        that fine-tuned ecosystem can be very challenging. Actually, there is no
        established procedure for how to change or upgrade major components of a
        blockchain once it has started its operation.`,
        id: '4'
      },
      {
        title: 'Critical Size',
        content: `The robustness against manipulations and hence the trustworthiness of the
        collectively maintained history of transaction data rely on the assumption that
        the majority of the system’s computational power is controlled by honest nodes.
        However, in small peer-to-peer systems with a limited computational power, that
        majority can still be very small, which in turn could make it possible to perform
        a 51 percent attack. This problem is in particularly relevant for cryptocurrencies
        with low market capitalization and limited user adoption. Hence, any blockchain
        will require a critical mass of honest nodes to support it and make it resistant to
        attackers with a lot of computational power. Reaching a critical size that makes
        51 percent attacks impossible is a challenge that every new blockchain has to
        face.`,
        id: '5'
      },
    ]
    $scope.title = titleEN;
    $scope.elements = elementsEN;
    $scope.introduction = introductionEN;
  });
