'use strict';

describe('Controller: BasicsCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var BasicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasicsCtrl = $controller('BasicsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BasicsCtrl.awesomeThings.length).toBe(3);
  });
});
