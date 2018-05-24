'use strict';

describe('Controller: HistoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var HistoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistoriesCtrl = $controller('HistoriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HistoriesCtrl.awesomeThings.length).toBe(3);
  });
});
