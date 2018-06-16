var Discord = require('discord.js');
var fs = require('fs');
var config = require('./config.json');

var client = new Discord.Client();
var commands = [];
var commandPaths = [];

var info = {
  client : client,
  config : config
}

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
      var cmdFile = require(commandPaths[i]);
      cmdFile.process({
        client : client,
        config : config,
        message : message,
        args : args
      })
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
