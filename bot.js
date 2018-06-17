var Discord = require('discord.js');
var fs = require('fs');
var config = require('./config.json');
var package = require('./package.json');
var permissions = require('./permissions.js');
var logger = require('./logger.js');

var client = new Discord.Client();
var commands = [];
var commandPaths = [];

process.on('uncaughtException', function (err) {
  logger.logError(err);
  logger.logWarning('Application in unclean state. Stopping process.')
  process.exit(1)
})

client.on('ready', () => {
  loadPlugins();
  getCommands();

  client.user.setPresence({ game: { name : config.prefix + 'help', type : 0 } });

  logger.logMessage('Bot is ready')
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
        logger.logMessage(`${message.author.tag} used command ${command}`);
        var cmdFile = require(commandPaths[i]);
        cmdFile.process({
          client : client,
          config : config,
          package : package,
          logger : logger,
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
      logger.logMessage('Loaded command : ' + file);
    })
  })
}

function loadPlugins() {
  fs.readdirSync('./plugins').forEach(dir => {
    var plugin = require('./plugins/' + dir + '/' + dir + '.js');
    plugin.init({
      client : client,
      config : config,
      package : package,
      logger : logger
    })
    logger.logMessage('Loaded plugin : ' + dir + '.js');
  })
}
