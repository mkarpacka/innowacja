'use strict';

describe('Controller: HashingCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var HashingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HashingCtrl = $controller('HashingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HashingCtrl.awesomeThings.length).toBe(3);
  });
});
