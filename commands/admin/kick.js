exports.process = function(info) {
  var target = info.message.mentions.members.first();
  if (!target) {
    info.message.reply('the correct usage of this command is `' + info.config.prefix + 'kick <@user> [reason]`');
    return;
  }

	if (!target.kickable) {
    info.message.reply("I cannot kick this member");
    return;
  }

  var reason = '';
  if (info.args[1]) {
    reason = ' with the reason **' + info.args.slice(1).join(' ') + '**';
  }

  target.send(`You have been kicked from **${info.message.guild.name}** by **${info.message.author.tag}**` + reason)
    .then(() => {
      target.kick(info.args.slice(1).join(' '));
      info.message.channel.send(`**${target.user.tag}** has been kicked from **${info.message.guild.name}** by **${info.message.author.tag}**` + reason);
    })
    .catch(error => message.send(`I could not kick this member because of **${error}**`));
}

exports.usage = 'kick <@user> [reason] | kick a user';
