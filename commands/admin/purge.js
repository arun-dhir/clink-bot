exports.process = function(info) {
  var num = parseInt(info.args[0]);
  if (!num) {
    info.message.reply('the correct usage of this command is `' + info.config.prefix + 'purge <number>`')
      .then((msg) => msg.delete(info.config.deleteAfter))
      .catch(info.logger.logError);
    return;
  }
  if (num < 1 || num > 100) {
    info.message.reply('please choose an integer between 1 and 100')
      .then((msg) => msg.delete(info.config.deleteAfter))
      .catch(info.logger.logError);
    return;
  }

  info.message.channel.send('Deleting the last **' + num + '** messages...')
    .then(msg => {
      msg.delete(info.config.deleteAfter)
        .then(() => {
          info.message.channel.bulkDelete(num, false)
            .catch((err) => info.logger.logError(err, info.message));
        });
    })
    .catch(info.logger.logError);
}

exports.usage = 'purge <number> | purge the last n messages';
