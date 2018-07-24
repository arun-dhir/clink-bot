exports.process = function(info) {
  var target = info.message.mentions.members.first();
  if (!target || !info.args[1]) {
    info.message.reply('the correct usage of this command is `' + info.config.prefix + 'warn <@user> <reason>`')
      .then((msg) => msg.delete(info.config.deleteAfter))
      .catch(info.logger.logError);
    return;
  }

  target.send(`You have recieved a new warning from **${info.message.author.tag}** with the reason **${info.args.slice(1).join(' ')}**`);
  info.message.channel.send(`**${target.user.tag}** has been given a warning by **${info.message.author.tag}**`);
}

exports.usage = 'warn <@user> <message> | warn a user';
