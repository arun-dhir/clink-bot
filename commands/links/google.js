exports.process = function(info) {
  info.message.channel.send(`https://google.com/search?q=` + info.args.join('+'));
}

exports.usage = 'google <search> | google something';
