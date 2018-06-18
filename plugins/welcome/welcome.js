var lConfig = require('./welcome.json');

var info;

exports.init = function(i) {
  info = i;
  info.client.on('guildMemberAdd', member => welcome(member));
}

function welcome(member) {
  for (var i = 0; i < lConfig.roles.length; i++) {
    var role = member.guild.roles.find('name', lConfig.roles[i]);

    if (!role) {
      info.logger.logWarning('\'' + lConfig.roles[i] + '\', a role specified in welcome.json could not be found.');
    }
    else {
      member.addRole(role);
    }
  }

  if (!lConfig.message || lConfig.message == "")
    return;

  member.send(lConfig.message);
}
