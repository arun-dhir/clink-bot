var info;

exports.init = function(i) {
  info = i;
  info.client.on('guildMemberAdd', member => welcome(member));
}

function welcome(member) {
  if (!info.config.welcomeMessage || info.config.welcomeMessage == "")
    return;

  member.send(info.config.welcomeMessage);
}
