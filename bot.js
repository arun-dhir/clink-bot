var Discord = require('discord.js');
var fs = require('fs');
var config = require('./config.json');
var package = require('./package.json');
var permissions = require('./permissions.js');

var client = new Discord.Client();
var commands = [];
var commandPaths = [];

client.on('ready', () => {
  getCommands();

  console.log("Bot is ready");

  client.user.setStatus('online');
  client.user.setPresence({ game: { name : config.prefix + 'help', type : 0 } });
})

client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.channel.type == 'dm')
    return;

  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  for (var i = 0; i < commands.length; i++) {
    if (commands[i] == command) {
      var perm = permissions.isAllowed(command, message);
      if (perm.state == true) {
        var cmdFile = require(commandPaths[i]);
        cmdFile.process({
          client : client,
          config : config,
          package : package,
          message : message,
          args : args
        })
      }
      else {
        message.reply(perm.message);
      }
    }
  }
})

client.login(config.token);

function getCommands() {
  fs.readdirSync('./commands').forEach(dir => {
    fs.readdirSync('./commands/' + dir).forEach(file => {
      commands.push(file.toLowerCase().substring(0, file.length - 3));
      commandPaths.push('./commands/' + dir + '/' + file);
    })
  })
}
