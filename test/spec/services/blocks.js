'use strict';

describe('Service: blocks', function () {

  // load the service's module
  beforeEach(module('nowaInnowacjaApp'));

  // instantiate service
  var blocks;
  beforeEach(inject(function (_blocks_) {
    blocks = _blocks_;
  }));

  it('should do something', function () {
    expect(!!blocks).toBe(true);
  });

});
