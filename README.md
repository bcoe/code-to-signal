# code-to-signal

[![Build Status](https://travis-ci.org/bcoe/code-to-signal.png)](https://travis-ci.org/bcoe/code-to-signal)
[![Coverage Status](https://coveralls.io/repos/bcoe/code-to-signal/badge.svg?branch=master)](https://coveralls.io/r/bcoe/code-to-signal?branch=master)
[![NPM version](https://img.shields.io/npm/v/code-to-signal.svg)](https://www.npmjs.com/package/code-to-signal)

shim to convert integer exit codes to named signals.

```js
var codeToSignal = require('code-to-signal')
var signal = codeToSignal(132) // signal = 'SIGILL'
```

## API

### codeToSignal.shimError(error)

Populate the signal field on an error object that only has
an exit code.

## License

ISC
