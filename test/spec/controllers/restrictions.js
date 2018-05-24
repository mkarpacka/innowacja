'use strict';

describe('Controller: RestrictionsCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var RestrictionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestrictionsCtrl = $controller('RestrictionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RestrictionsCtrl.awesomeThings.length).toBe(3);
  });
});
