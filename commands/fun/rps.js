exports.process = function(info) {
  if (!info.args[0])
    return;

  if (info.args[0] != 'r' && info.args[0] != 'p' && info.args[0] != 's') {
    info.message.reply('that is not a valid option! Choose from `r`, `p` or `s`.')
      .then((msg) => msg.delete(info.config.deleteAfter))
      .catch(info.logger.logError);
    return;
  }

  var playerV;
  var player;

  var meV = randomInt(0, 2);
  var me;

  switch (info.args[0]) {
    case 'r':
      player = 'rock'
      playerV = 0;
      break;
    case 'p':
      player = 'paper'
      playerV = 1;
      break;
    case 's':
      player = 'scissors'
      playerV = 2;
      break;
  }
  switch (meV) {
    case 0:
      me = 'rock'
      break;
    case 1:
      me = 'paper'
      break;
    case 2:
      me = 'scissors'
      break;
  }

  if (meV == playerV) {
    info.message.channel.send(`You chose ${player}, and I also chose ${me}. It's a draw!`);
  }

  if (meV == eClamp(playerV + 1, 0, 2)) {
    info.message.channel.send(`You chose ${player}, and I chose ${me}. I win!`);
  }

  if (meV == eClamp(playerV - 1, 0, 2)) {
    info.message.channel.send(`You chose ${player}, and I chose ${me}. You win!`);
  }
}

exports.usage = 'rps <r, p, s> | play rock paper scissors';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eClamp(value, min, max) {
  if (value < min)
    value = max;

  if (value > max)
    value = min;

  return value;
};
