# code-to-signal

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
