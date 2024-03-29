# prysc

prysc (prih-sk) is a general purpose, open-source, Discord moderation bot for the [CreaCon server](https://discord.gg/3F36rGDgah "CreaCon") with plans to potentially become public use. 

> Prefix: `p!`

# Dependencies:
| `Dependencies` | `Descriptions` | `Documentations/Downloads`|
| ------ | ------ | ------ |
| Discord.js | API Wrapper for JavaScript to create Discord bots. | [Documentation](https://discord.js.org/#/ "Discord.js Documentation"), [Guide](https://discordjs.guide/#before-you-begin "Discord.js Guide") |
| FS | Allows for access and interaction with file systems. | [Documentaion](https://nodejs.dev/learn/the-nodejs-fs-module "FS Module Documentaion") |
| Nodemon | Monitors for saved changes in the source code and automatically restarts the program. | [Documentation](https://nodemon.io/ "Nodemon Documentation") | 

# Changelog:
| `Version` | `Changes` | `Upcomming` |
| ------ | ------ | ------ | 
| In-Dev v.0.0.1 | Added very basic code to make the bot run. Current issue with Discord not registering any commands made for the bot. A basic ping command h as been added however it cannot be tested due to the aformentioned issue. | Plan to fix the issues with Discord not recognizing the commands and add more commands once that has been fixed. |
| In-Dev v.0.0.1-b | Changed the event and command handler to a modified handler from [ItzAshu397](https://github.com/ItzAshu397/Discord.js-v13-CMD-Event-Handler) to fit the needs of my bot. Unfortunately the token must be hard-coded into `clientManager.js` and so `clientManager.js` is inside of the `.gitignore`. For the forseeable future, or until the bug is resolved, an example `clientManager` file has been added in its place, aptly titled `clientManager.example.js`. A ping and test command has been added with more commands to come. New features are expectd. | More commands and events are to be added in the near future. | 
