var Discord = require('discord.js');

exports.process = function(info) {
  var embed = new Discord.RichEmbed()
    .setTitle('Uptime')
    .setDescription('I have been online for ' + getUptime());

  info.message.channel.send({embed});
}

exports.usage = 'uptime | get the bot\'s uptime';

function getUptime() {
    let days = Math.floor(process.uptime() / 86400);
    let hours = Math.floor((process.uptime() % 86400) / 3600);
    let minutes = Math.floor(((process.uptime() % 86400) % 3600) / 60);
    let seconds = Math.floor(((process.uptime() % 86400) % 3600) % 60);

    if (days === 0 && hours !== 0) {
        return `${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`;
    } else if (days === 0 && hours === 0 && minutes !== 0) {
        return `${minutes} minute(s) and ${seconds} second(s)`;
    } else if (days === 0 && hours === 0 && minutes === 0) {
        return `${seconds} second(s)`;
    } else {
        return `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`;
    }
}
