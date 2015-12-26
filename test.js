/* global describe, it */

var codeToSignal = require('./')
var expect = require('chai').expect

require('chai').should()
require('tap').mochaGlobals()

describe('code-to-signal', function () {
  it('maps an integer code to a signal', function (done) {
    codeToSignal(152).should.equal('SIGXCPU')
    return done()
  })

  describe('shimError', function () {
    it('maps a Linux-style error to OSX-style', function (done) {
      var error = Error('Command failed: Power failure')
      error.code = 158
      error.signal = null

      error = codeToSignal.shimError(error)

      error.signal.should.equal('SIGPWR')
      return done()
    })

    it('leaves OSX-style error the same', function (done) {
      var error = Error('Command failed: Power failure')
      error.code = null
      error.signal = 'SIGPWR'

      error = codeToSignal.shimError(error)

      error.signal.should.equal('SIGPWR')
      return done()
    })

    it('ignores null error', function (done) {
      var error = null
      error = codeToSignal.shimError(error)

      expect(error).to.equal(null)
      return done()
    })
  })
})
