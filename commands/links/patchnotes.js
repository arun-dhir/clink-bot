exports.process = function(info) {
  if (info.args[0]) {
    info.message.channel.send('https://github.com/ClinkMakesGames/clink-bot/releases/tag/v' + info.args[0]);
  }
  else {
    info.message.channel.send('https://github.com/ClinkMakesGames/clink-bot/releases/tag/v' + info.package.version);
  }
}

exports.usage = 'patchnotes [x.x.x] | get the patchnotes for a version';
