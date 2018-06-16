var permissions = require('./permissions.json');

exports.isAllowed = function(command, message) {
  var perms = permissions[command];

  if (!perms)
    return {state:true};

  if (perms['channel-lock'] && perms['channel-lock'].length != 0) {
    var auth = false;
    for (var i = 0; i < perms['channel-lock'].length; i++) {
      if (perms['channel-lock'][i] == message.channel.id) {
        auth = true;
      }
    }
    if (!auth) {
      return {state:false, message:'this is not the correct channel!'};
    }
  }

  if (perms.roles && perms.roles.length != 0) {
    if (!message.member.roles.some(r=>perms.roles.includes(r.name))) {
      return {state:false, message:'you do not have the permissions to do this!'};
    }
  }

  if (perms.ids && perms.ids.length != 0) {
    var auth = false;
    for (var i = 0; i < perms.ids.length; i++) {
      if (perms.ids[i] == message.author.id) {
        auth = true;
      }
    }
    if (!auth) {
      return {state:false, message:'you do not have the permissions to do this!'};
    }
  }

  return {state:true};
}
