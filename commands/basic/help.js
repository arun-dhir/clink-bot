var Discord = require('discord.js');
var fs = require('fs');

exports.process = function(info) {
  var dirs = [];
  var x = 0;

  fs.readdirSync('./commands').forEach(dir => {
    dirs.push({dir : dir, cmds : []});
    fs.readdirSync('./commands/' + dir).forEach(file => {
      dirs[x].cmds.push(file);
    })
    x++;
  })

  var embed = new Discord.RichEmbed()
    .setTitle('EarthBot Commands')
    .setDescription('A list of all the commands');

  for (var i = 0; i < dirs.length; i++) {
    var text = '';

    for (var x = 0; x < dirs[x].cmds.length; x++) {
      text += info.config.prefix + require('../' + dirs[i].dir + '/' + dirs[i].cmds[x]).usage + '\n';
    }

    embed.addField(capitalizeFirstLetter(dirs[i].dir), text);
  }

  info.message.author.send({embed});
}

exports.usage = 'help | get a list of every command';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
