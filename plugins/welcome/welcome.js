var lConfig = require('./welcome.json');

var info;

exports.init = function(i) {
  info = i;
  info.client.on('guildMemberAdd', member => welcome(member));
}

function welcome(member) {
  if (!lConfig.message || lConfig.message == "")
    return;

  member.send(lConfig.message);
}
