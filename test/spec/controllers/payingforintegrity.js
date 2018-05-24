'use strict';

describe('Controller: PayingforintegrityCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var PayingforintegrityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayingforintegrityCtrl = $controller('PayingforintegrityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PayingforintegrityCtrl.awesomeThings.length).toBe(3);
  });
});
