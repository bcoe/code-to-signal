var lookup = {
  '129': 'SIGHUP',
  '130': 'SIGINT',
  '131': 'SIGQUIT',
  '132': 'SIGILL',
  '133': 'SIGTRAP',
  '134': 'SIGABRT',
  // 134: SIGIOT
  '135': 'SIGBUS',
  '136': 'SIGFPE',
  '139': 'SIGSEGV',
  '140': 'SIGUSR2',
  '141': 'SIGPIPE',
  '142': 'SIGALRM',
  '143': 'SIGTERM',
  '144': 'SIGSTKFLT',
  '152': 'SIGXCPU',
  '153': 'SIGXFSZ',
  '154': 'SIGVTALRM',
  '155': 'SIGPROF',
  '157': 'SIGIO',
  // 157: SIGPOLL
  '158': 'SIGPWR',
  '159': 'SIGSYS'
  // 159: SIGUNUSED
}

var CodeToSignal = function (code) {
  return lookup['' + code]
}

CodeToSignal.shimError = function (error) {
  if (error.code && !error.signal) {
    error.signal = CodeToSignal(error.code)
  }

  return error
}

module.exports = CodeToSignal
