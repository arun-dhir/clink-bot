var Discord = require('discord.js');

exports.process = function(info) {
  var embed = new Discord.RichEmbed()
    .setTitle('My code')
    .setDescription('https://github.com/ClinkMakesGames/earth-bot');

  info.message.channel.send({embed});
}

exports.usage = 'github | get a link to my code on github';
