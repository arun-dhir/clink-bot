exports.process = function(info) {
  info.message.channel.send(`:ping_pong: ${info.client.ping}ms`)
}

exports.usage = 'ping | get the bot\'s latency';
