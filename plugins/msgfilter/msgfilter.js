var lConfig = require('./msgfilter.json');

var info;

exports.init = function(i) {
  info = i;
  info.client.on('message', message => filter(message));
}

function filter(message) {
  if (message.content.startsWith(info.config.prefix) || message.channel.type === 'dm') return;

  var channel = lConfig[message.channel.name];

  if (!channel)
    return;

  if (channel.whitelist) {
    for (var i = 0; i < channel.whitelist.length; i++) {
      if (message.content.search(new RegExp(channel.whitelist[i], 'g')) == -1)
        message.delete();
    }
  }

  if (channel.blacklist) {
    for (var i = 0; i < channel.blacklist.length; i++) {
      if (message.content.search(new RegExp(channel.blacklist[i], 'g')) != -1)
        message.delete();
    }
  }
}
