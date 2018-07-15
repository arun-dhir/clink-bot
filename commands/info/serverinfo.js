var Discord = require('discord.js');

exports.process = function(info) {
  var guild = info.message.channel.guild;

  var embed = new Discord.RichEmbed()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL)
    .addField('Verification Level', getVerificationLevel(guild.verificationLevel))
    .addField('Region', guild.region)
    .addField('Owner', guild.owner.user.username)
    .addField('Members [' + guild.memberCount + ']', getMembers(guild.members.array()))
    .addField('Channels [' + guild.channels.array().length + ']', getChannels(guild.channels.array()))
    .addField('Created On', timestampToDate(guild.createdTimestamp))
    .addField('Custom Emojis', guild.emojis.map(e=>e.toString()).join(" "));

  info.message.channel.send({embed});
}

function getVerificationLevel(level) {
  switch (level) {
    case 0:
      return 'None - Unrestricted';
    case 1:
      return 'Low - Must have a verified email on their discord account';
    case 2:
      return 'Medium - Must have a verified email on their discord account. Must have been registered on Discord for more than 5 minutes.';
    case 3:
      return 'High - Must have a verified email on their discord account. Must have been registered on Discord for more than 5 minutes. Must have been a member on this server for more than 10 minutes';
    case 4:
      return 'Extreme - Must have a verified phone on their Discord account';
  }
}

function getMembers(members) {
  var bots = 0;
  var humans = 0;

  var online = 0;
  var idle = 0;
  var dnd = 0;
  var offline = 0;

  for (var i = 0; i < members.length; i++) {
    if (members[i].user.bot) {
      bots++;
    }
    else {
      humans++;
    }

    switch (members[i].presence.status) {
      case 'online': online++; break;
      case 'idle': idle++; break;
      case 'dnd': dnd++; break;
      case 'offline': offline++; break;
    }
  }

  return `${humans} humans, ${bots} bots\n\n${online} online\n${idle} idle\n${dnd} do not disturb\n${offline} offline`
}

function getChannels(channels) {
  var voice = 0;
  var text = 0;
  var category = 0;

  for (var i = 0; i < channels.length; i++) {
    switch (channels[i].type) {
      case 'text': text++; break;
      case 'voice': voice++; break;
      case 'category': category++; break;
    }
  }

  return `${category} categories\n${text} text\n${voice} voice`
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

exports.usage = 'serverinfo | get info about the server';
