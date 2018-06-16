var Discord = require('discord.js');

exports.process = function(info) {
  var embed = new Discord.RichEmbed()
    .setTitle('Version')
    .setDescription('Current version is ' + info.package.version);

  info.message.channel.send({embed});
}

exports.usage = 'version | get the current version';
