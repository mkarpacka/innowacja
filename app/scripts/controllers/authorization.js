'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:AuthorizationCtrl
 * @description
 * # AuthorizationCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('AuthorizationCtrl', function ($scope) {
		var titleEN = 'Authorization';
		var introductionEN = `So far we managed to know that the blokchain uses public cryptographic keys as account numbers and utilizes the public-to-private 
							 approach of asymetric cryptography for transfering ownership among accounts. However, we need to ensure that only the lawful owner can transfer
							his or her property to other accounts. In this chapter we are explaining how asymetric cryptography ensures that. `;
		var elementsEN = [
		  {
			title: 'The Goal of authorization',
			content: `We have to ensure that the owner of an account can transfer the property associated with it to other accounts.
						Every unauthorized attempt should be rejected. The peer-to-peer system under consideration is open to everyone - everyone can 
						create transactions and submit them to the system. The challenge of the blockchain is to maintain its openness while restricting the 
						transfer of ownership to the lawful owner.`,
			id: '1'
		  },
		  {
			title: 'The Idea',
			content: `The main idea of ensuring that only the lawful owner can transfer ownership is to utilize a digital security measure.
						Main steps consider: identifying an account, stating the agreement of its owner with the content of specific transaction data, and 
						approving its execution by allowing the data to be added to the history of transaction data.
						`,
			id: '2'
		  },
		   {
			title: 'How to create the signature?',
			content: `The first step is to create the hash value of the data we want to transfer and encrypt it with the 
					  private key. The cypher data is now the digital signature of the data we want to transfer.It is unique with respect to two aspects: 
					  First, it can be traced back uniquely because it is it with unique private key. 
					  Second, it is unique regarding the data we want to send because it is based on the digital fingerprint of the data. 
					  Both the data and the digital signature are 
					  put together in a file, which is digitally signed message to transfer. `,
			id: '3'
		  },
			{
			title: 'Verifying Data by using the signature',
			content: `The message, with data together with the digital signature, is sent to the whole world.
						Everyone can verify that the message is authorized by utilizing the public key.
						At first the recipient of the data calculates the hash value of the received data by himself.
						Then the recipient of message decrypts the attached cypher data (the digital signature) with the  sender's public key.
						Comparing both hash values of decrypted by receiver data and received data completes the verification.
						Since both hash values are identical, the recipient correctly concludes, first, that the message 
						was signed by valid sender, because he was able to decrypt the signature with the public key, and second, 
						that the data found in the message is indeed the one he wanted to send because the 
						decrypted cypher data is identical with the hash value of the data in the message.`,
			id: '4'
		  },
			{
			title: 'Identifying fraud using the signature',
			content: `The slight change of data inside of message is identified immediately.
					 At first the recipient of the message will create the hash value of the data by himself.
					 Then the recipient of my message decrypts the digital signature 
					 with the public key. Doing so leads to the hash value of the version of the data
					 I wanted to send to the world. 
					 Comparing both hash values reveals that they are not identical.`,
			id: '5'
		  },
			{
			title: 'Summary',
			content: `This step completes the process of how the blockchain protects ownership on the level of individual transaction data. As a result, transactions and their purpose to transfer and prove ownership are safe and secure. 
					 However, it is important to ensure that transaction data are not only secured on the individual level.
					 There is still a need to store the whole history of transaction data in a secure way.`,
			id: '6'
		  },
		];
			
    $scope.title = titleEN;
    $scope.elements = elementsEN;
    $scope.introduction = introductionEN;
});
