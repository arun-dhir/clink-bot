function logMessage(message) {
  log('[LOG] ' + message);
}

function logWarning(message) {
  log('[WARN] ' + message)
}

function logError(error) {
  var str = '[ERROR] ';

  var regex = /clink-bot\\(.*)\.js:[0-9]*:[0-9]*/;
  var a = error.stack.match(regex);

  if (a) {
    str += `[@${a[0]}] `
  }

  var regexb = /(.*)/;
  var b = error.stack.match(regexb);

  if (b) {
    str += `${b[0]}`
  }

  log(str)
}

function log(message) {
  console.log(getDate() + message);
}

function getDate() {
  var now = new Date();
  var date = '[';

  date += now.getUTCFullYear() + '/';
  date += pad(now.getUTCMonth() + 1, '0', 2) + '/';
  date += pad(now.getUTCDate() + 1, '0', 2) + ' ';
  date += pad(now.getUTCHours() + 1, '0', 2) + ':';
  date += pad(now.getUTCMinutes() + 1, '0', 2) + ':';
  date += pad(now.getUTCSeconds() + 1, '0', 2) + '] ';

  return date;
}

function pad(str, char, target) {
    var s = str.toString();
    while (s.length < target) {
        s = char + s;
    }
    return s;
}

exports.logMessage = logMessage;
exports.logWarning = logWarning;
exports.logError = logError;
