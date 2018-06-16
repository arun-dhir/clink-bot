exports.process = function(info) {
  if (randomInt(0, 1) == 0) {
    info.message.channel.send('It was heads!');
  }
  else {
    info.message.channel.send('It was tails!');
  }
}

exports.usage = 'coinflip | flip a coin';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
