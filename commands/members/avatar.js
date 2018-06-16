var Discord = require('discord.js');

exports.process = function(info) {
  var embed = new Discord.RichEmbed()
    .setTitle(info.message.author.tag + '\'s avatar')
    .setDescription('[Link](' + info.message.author.avatarURL + ')')
    .setImage(info.message.author.avatarURL)
    .setTimestamp(new Date());

  info.message.channel.send({embed});
}

exports.usage = 'avatar | get your avatar';
