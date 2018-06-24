var Discord = require('discord.js');
var reddit = require('fetch-subreddit');

exports.process = function(info) {
  reddit.fetchSubreddit('me_irl').then((results) =>
  {
    var urls = results[0].urls;
    var chosen = urls[Math.floor(Math.random() * (urls.length - 0))];

    info.message.channel.send('Fresh from `r/me_irl` ---> ' + chosen);
  }).catch(info.logger.error);
}

exports.usage = 'meirl | get a meme from r/meirl';
