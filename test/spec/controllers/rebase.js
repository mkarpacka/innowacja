'use strict';

describe('Controller: RebaseCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var RebaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RebaseCtrl = $controller('RebaseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RebaseCtrl.awesomeThings.length).toBe(3);
  });
});
