'use strict';

describe('Controller: IdentificationCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var IdentificationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdentificationCtrl = $controller('IdentificationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdentificationCtrl.awesomeThings.length).toBe(3);
  });
});
