# clink-bot

A discord bot, built in discord.js. Find what's coming next on our [Trello](https://trello.com/b/6ZlRJQMH/clinkbot).

https://clinkbot.glitch.me/

---

### Installation

You will need to have [node.js](https://nodejs.org/) on your computer to host it yourself. Remove the `.example` on files ending with `.example`, for example `config.json.example` becomes just `config.json`. Go into `config.json` and fill in the token and your prefix. Use `cd` to go to the location of your bot then use `node bot.js` and enjoy!

---

### Custom Commands

Don't feel like going through the trouble of adding a fully-integrated command? Custom commands are for you! Here's an example of a command:

```
{"command":"hello", "reply":true, "return":"hey there!"}
```

There are three fields, `command` specifies what you need to say to active that command, for example, if `command` was `hello` and the prefix was `+`, you would need to type `+hello`. `reply` specifies if the bot should reply to the message or not. With reply on, the command above would be `@Clink, hello there!` and with it off it would be just `hello there!`. And finally `return` is what the bot should say.

---

### Permissions

Permissions is how you can dictate who can use a command, and in what channel. There are three 'fields' to do this. `channel-lock`, `roles` and `ids`. Each of these 'fields' takes an array of items. Here's an example

```
"channel-lock" : [446345375909937152, 446345390141472768],
"roles" : ["Mod", "Admin"],
"permissions" : ["MANAGE_MESSAGES"]
```

With this example, you will only be allowed to use the command in the channel with an id of `446345375909937152`, and the channel with an id of `446345390141472768`, and you must also have a role of `Mod` or `Admin`. Leave the array blank (`[]`) or don't include the field to ignore that field. We put `MANAGE_MESSAGES` into the permissions, meaning only someone with the permission to manage messages can use the command. See all permissions [here](https://discordapp.com/developers/docs/topics/permissions).

---

### Message Filter

With the message filter, you can specify which messages need to be deleted. There are two fields: `whitelist` and `blacklist`. The filter uses the pattern of a [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

---

### Help

I'll be more than happy to help you out on discord, find me @Clink#9168.
