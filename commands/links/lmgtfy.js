exports.process = function(info) {
  info.message.channel.send(`http://lmgtfy.com/?q=` + info.args.join('+'));
}

exports.usage = 'lmgtfy <search> | lmgtfy something';
