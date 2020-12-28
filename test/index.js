'use strict';

var should = require('chai').should();
var okcore = require('../');

describe('#versionGuard', function() {
  it('global._okcore should be defined', function() {
    should.equal(global._okcore, okcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      okcore.versionGuard('version');
    }).should.throw('More than one instance of okcore');
  });
});
