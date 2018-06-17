exports.process = function(info) {
  var target = info.message.mentions.members.first();
  if (!target) {
    info.message.reply('the correct usage of this command is `' + info.config.prefix + 'ban <@user> [reason]`');
    return;
  }

	if (!target.bannable) {
    info.message.reply("I cannot ban this member");
    return;
  }

  var reason = '';
  if (info.args[1]) {
    reason = ' with the reason **' + info.args.slice(1).join(' ') + '**';
  }

  target.send(`You have been banned from **${info.message.guild.name}** by **${info.message.author.tag}**` + reason)
    .then(() => {
      target.ban(info.args.slice(1).join(' '));
      info.message.channel.send(`**${target.user.tag}** has been banned from **${info.message.guild.name}** by **${info.message.author.tag}**` + reason);
    })
    .catch(error => message.send(`I could not ban this member because of **${error}**`));
}

exports.usage = 'ban <@user> [reason] | ban a user';
