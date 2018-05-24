'use strict';

describe('Controller: ProofofworkCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var ProofofworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProofofworkCtrl = $controller('ProofofworkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProofofworkCtrl.awesomeThings.length).toBe(3);
  });
});
