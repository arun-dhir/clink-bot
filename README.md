# clink-bot

A WIP discord bot, built in discord.js. Find what's coming next on our [Trello](https://trello.com/b/6ZlRJQMH/clinkbot).

---

### Installation

You will need to have [node.js](https://nodejs.org/) on your computer to host it yourself. Remove the `.example` on files ending with `.example`, for example `config.json.example` becomes just `config.json`. Go into `config.json` and fill in the token and your prefix. Use `cd` to go to the location of your bot then use `node bot.js` and enjoy!

---

### Permissions

Permissions is how you can dictate who can use a command, and in what channel. There are three 'fields' to do this. `channel-lock`, `roles` and `ids`. Each of these 'fields' takes an array of items. Here's an example

```
"channel-lock" : [446345375909937152, 446345390141472768]
"roles" : ["Mod", "Admin"]
```

With this example, you will only be allowed to use the command in the channel with an id of `446345375909937152`, and the channel with an id of `446345390141472768`, and you must also have a role of `Mod` or `Admin`. Leave the array blank (`[]`) or don't include the field to ignore that field.

---

### Help

I'll be more than happy to help you out on discord, @Clink#9168.
