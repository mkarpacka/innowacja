'use strict';

describe('Controller: DemoCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var DemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemoCtrl = $controller('DemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DemoCtrl.awesomeThings.length).toBe(3);
  });
});
