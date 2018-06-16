# earth-bot

A WIP discord bot, built in discord.js.

---

### Hosting

You will need to have [node.js](https://nodejs.org/) on your computer to host it yourself. First you need to go to the [discord developers website](https://discordapp.com/developers/applications/me) and get your bot token. Go into `config.json` and fill in the token and choose your prefix. To start the bot, open up command prompt to use `cd C:\bot-location\earth-bot`. Then use `node bot.js` and enjoy!

**Note:** you will need to replace `bot-location` to the location of your bot

---

### Permissions

Permissions is how you can dictate who can use a command, and in what channel. There are three 'fields' to do this. `channel-lock`, `roles` and `ids`. Each of these 'fields' takes an array of items. Here's an example

```
"channel-lock" : [446345375909937152, 446345390141472768]
"roles" : ["Mod", "Admin"]
```

With this example, you will only be allowed to use the command in the channel with an id of `446345375909937152`, and the channel with an id of `446345390141472768`, and you must also have a role of `Mod` or `Admin`. Leave the array blank (`[]`) or don't include the field to ignore that field.
