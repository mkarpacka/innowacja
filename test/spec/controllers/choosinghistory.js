'use strict';

describe('Controller: ChoosinghistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var ChoosinghistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChoosinghistoryCtrl = $controller('ChoosinghistoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChoosinghistoryCtrl.awesomeThings.length).toBe(3);
  });
});
