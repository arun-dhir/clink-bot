var Discord = require('discord.js');

exports.process = function(info) {
  var member = info.message.member;

  if (info.message.mentions.members.first()) {
    member = info.message.mentions.members.first();
  }

  var embed = new Discord.RichEmbed()
    .setTitle(`${member.user.tag} (${member.nickname})`)
    .setThumbnail(member.user.avatarURL)
    .addField('Bot', member.user.bot)
    .addField('ID', member.user.id)
    .addField('Created On', timestampToDate(member.user.createdTimestamp))
    .addField('Joined On', timestampToDate(member.joinedTimestamp));

  if (member.user.note) {
    embed.addField('Description', member.user.note);
  }

  embed.addField('Presence', presenceToString(member.user.presence))
    .addField('Roles', member.roles.filter(r=>r.name!='@everyone').map(r=>'<@&' + r.id + '>').join(" "));

  info.message.channel.send({embed});
}

function presenceToString(presence) {
  var t = presence.status

  if (presence.game) {
    if (presence.game.streaming) {
      return 'streaming ' + presence.game.url;
    }

    if (presence.game.name) {
      t += ' - ' + typeToString(presence.game.type) + ' ' + presence.game.name;
    }
  }

  return t;
}

function typeToString(type) {
  switch (type) {
    case 0: return 'playing';
    case 1: return 'streaming';
    case 2: return 'listening';
    case 3: return 'watching';
  }
}

function timestampToDate(timestamp) {
  var date = new Date(timestamp);

  var year = date.getUTCFullYear();
  var day = date.getUTCDay();
  var month = date.getUTCMonth();
  var datedate = date.getUTCDate();

  var hours = date.getUTCHours();
  var minutes = "0" + date.getUTCMinutes();

  return indexToDay(day) + ', ' + datedate + ' ' + indexToMonth(month) + ' ' + year + ' @ ' + hours + ':' + minutes.substr(-2);
}

function indexToDay(index) {
  switch (index) {
    case 0:
      return 'Monday'
    case 1:
      return 'Tuesday'
    case 2:
      return 'Wednesday'
    case 3:
      return 'Thursday'
    case 4:
      return 'Friday'
    case 5:
      return 'Saturday'
    case 6:
      return 'Sunday'
  }
}

function indexToMonth(index) {
  switch (index) {
    case 0:
      return 'January';
    case 1:
      return 'Febuary';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
  }
}

exports.usage = 'profile [@user] | get a user\'s profile';
