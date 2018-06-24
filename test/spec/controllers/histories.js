'use strict';

describe('Controller: HashPuzzleCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var HashPuzzleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HashPuzzleCtrl = $controller('HashPuzzleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HashPuzzleCtrl.awesomeThings.length).toBe(3);
  });
});
