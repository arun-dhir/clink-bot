var Discord = require('discord.js');
var reddit = require('fetch-subreddit');

exports.process = function(info) {
  reddit.fetchSubreddit('eyebleach').then((results) =>
  {
    var urls = results[0].urls;
    var chosen = urls[Math.floor(Math.random() * (urls.length - 0))];

    info.message.channel.send('Fresh from `r/eyebleach` ---> ' + chosen);
  }).catch(info.logger.error);
}

exports.usage = 'eyebleach | get a meme from r/eyebleach';
