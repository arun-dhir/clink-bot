var Discord = require('discord.js');

exports.process = function(i) {
  var embed = new Discord.RichEmbed()
    .setTitle(i.message.author.tag + '\'s avatar')
    .setDescription('[Link](' + i.message.author.avatarURL + ')')
    .setImage(i.message.author.avatarURL)
    .setTimestamp(new Date());

  i.message.channel.send({embed});
}

exports.usage = 'avatar | get your avatar';
