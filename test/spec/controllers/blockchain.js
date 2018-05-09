'use strict';

describe('Controller: BlockchainCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var BlockchainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlockchainCtrl = $controller('BlockchainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlockchainCtrl.awesomeThings.length).toBe(3);
  });
});
