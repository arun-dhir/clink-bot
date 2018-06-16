exports.process = function(info) {
  if (!info.args[0])
    return;

  var num = randomInt(0, parseInt(info.args[0]));

  info.message.channel.send('The dice landed on ' + num + '!');
}

exports.usage = 'roll <n> | roll a n-sided dice';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
