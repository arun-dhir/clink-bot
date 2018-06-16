exports.process = function(info) {
  info.message.channel.send(info.args.join(' '));
}

exports.usage = 'say <message> | get the bot to say a message';
