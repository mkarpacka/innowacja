'use strict';

describe('Controller: AuthorizationCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var AuthorizationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorizationCtrl = $controller('AuthorizationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthorizationCtrl.awesomeThings.length).toBe(3);
  });
});
