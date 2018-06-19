var lConfig = require('./customcmds.json');

var info;

exports.init = function(i) {
  info = i;
}

exports.onMessage = function(msg) {
  var args = msg.content.slice(info.config.prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  for (var i = 0; i < lConfig.length; i++) {
    if (lConfig[i].command.toLowerCase() == command) {
      info.logger.logMessage(`${msg.author.tag} used custom command ${command}`);
      if (lConfig[i].reply) {
        msg.reply(lConfig[i].return);
      }
      else {
        msg.channel.send(lConfig[i].return);
      }
    }
  }
}
