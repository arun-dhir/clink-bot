exports.process = function(info) {
  info.logger.logWarning('Stopping process');
  process.exit(0);
}

exports.usage = 'stop | kill the bot';
