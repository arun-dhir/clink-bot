exports.process = function(i) {
  i.message.channel.send(i.args.join(' '));
}

exports.usage = 'say <message> | get the bot to say a message';
