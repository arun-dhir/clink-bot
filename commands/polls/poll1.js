var Discord = require('discord.js');

exports.process = function(info) {
    var args = info.message.content.slice(info.config.prefix.length + 'poll1'.length).trim().split(/\|+/g);

    if (args.length < 1)
        return;

    if (args[1] == undefined || args[1] == '') {
        args[1] = 'No description provided.';
    }

    var embed = new Discord.RichEmbed()
        .setTitle(args[0])
        .setDescription(args[1]);

    info.message.channel.send({embed})
        .then((msg) => {
            msg.react('👍')
                .then(() => {
                    msg.react('👎');
                })
        })
}

exports.usage = 'poll1 <title> | [description] | create a yes/no poll';
