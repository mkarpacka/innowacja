'use strict';

describe('Controller: DistributionCtrl', function () {

  // load the controller's module
  beforeEach(module('nowaInnowacjaApp'));

  var DistributionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DistributionCtrl = $controller('DistributionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DistributionCtrl.awesomeThings.length).toBe(3);
  });
});
