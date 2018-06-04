'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:PayingforintegrityCtrl
 * @description
 * # PayingforintegrityCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('PayingforintegrityCtrl', function ($scope) {
    var titleEN = 'Paying	for	Integrity';
    var introductionEN = `Solving the	hash puzzle
    plays an important role	in achieving and	maintaining	the	integrity	of the system.
    But	it costs a lot of computational	resources	and, as	a
    consequence, it	costs	money. For that reason,	it is necessary	to compensate	the
    nodes	that contribute to the	integrity	of the	system	for	doing	so.	However,
    throughout the discussion, it	has	been assumed that	the	nodes	are	compensated
    somehow	without	asking	which	instrument of payment	is used	to do. `;
    var elementsEN = [
      {
        title: 'The	Role of Fees Within the	Blockchain',
        content: `The	blockchain utilizes	the	carrot-and-stick	approach	in
        order	to get	the	peers	that make up	the	system	control	one	another.
        Reward and punishment are implemented with rewards based on transaction fees	and	proof of work. This	effect is universal in
        all blockchain applications regardless of their concrete application goal.However, the choice of a concrete instrument of payment used to compensate	the  maintainers of the system is	not	identical	in	all blockchain	applications. Defining and using an instrument of payment that will	be given	to the peers for verifying and
        adding new blocks	to the blockchain is	considered one of the major challenges in establishing a blockchain application. `,
        id: '1'
      },
      {
        title: 'Impact on the	Integrity	of the	System',
        content: `The	forces of reward and punishment are the foundation of achieving and maintaining integrity in the blockchain.
        This works because the peers of the system receive a valuable compensation for maintaining the integrity of the system.
        Lack of trust in the instrument of payment used to compensate the peers of the system will contaminate the whole system.
        Hence, the instrument of payment used for compensating the supporters of the system directly impacts the trustworthiness
        of the blockchain itself.`,
        id: '2'
      },
      {
        title: 'Impact	on	the	Openness	of	the	System',
        content: `Blockchain is to be an open peer-to-peer system. Everyone can
        connect your computer to the system and will be rewarded for the contribution
        to maintain integrity. But what will happen if the instrument
        the payment used to compensate for peers is not as open as the block itself? What
        if the compensation is made using an available payment instrument
        or accepted only in certain countries or subject to the movement of capital
        restrictions? In this case, the payment instrument counteracts the technique
        system openness by calling economic constraints.`,
        id: '3'
      },
      {
        title: 'Impact on the	Distributed	Nature of the	System',
        content: `The	blockchain is a purely distributed peer-to-peer system without any element
        of central	control or	coordination. But  if	the	instrument of
        payment	used to compensate peers is	controlled and	governed	by one central
        institution. This means allowing centrality to enter the system through the back door.
        It would counteract the distributed nature of the system.`,
        id: '4'
      },
      {
        title: 'Desirable	Properties of	an Instrument	of Payment for Compensating	Peers',
        content: `The first and most prominent blockchain	application	was	formed to solve the problem.
        The	idea of that blockchain	is brilliant: It is a	purely
        distributed	peer-to-peer system	that manages ownership of	a	new	kind of	digital
        money, which, in turn, is	used to	compensate the peers of the	system for
        verifying	and	adding new blocks to the	blockchain-data-structure. This particular
        new	money	connects its application goal, the management of	ownership	of	a
        new	kind of money, with	the	need to	have a trustworthy	instrument	of	payment
        for	compensating its contributors. The Bitcoin
        system not only manages ownership of the new digital money in	a	purely
        distributed	peer-to-peer system	but it also	compensates	its	peers	with the	money
        to whose	integrity	they contribute. Due to	the	fact that the	blockchain relies
        heavily	on cryptography,	this new kind	of money	is also called cryptographic
        money	or cryptocurrency for short.
        `,
        id: '5'
      },
    ]
    $scope.title = titleEN;
    $scope.elements = elementsEN;
    $scope.introduction = introductionEN;

  });

