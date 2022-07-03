const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const fs = require('fs')
// const fs = replace('fs')
const client = new Client({ 
	intents: [
		Intents.FLAGS.DIRECT_MESSAGES,
  	Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  	Intents.FLAGS.GUILDS,
  	Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
  	Intents.FLAGS.GUILD_BANS,
  	Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  	Intents.FLAGS.GUILD_INVITES,
  	Intents.FLAGS.GUILD_INTEGRATIONS,
  	Intents.FLAGS.GUILD_WEBHOOKS
	], 
	restTimeOffset: 0,
});

client.commands = new Collection();

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);

  }
  client.handleEvents(eventFiles, './src/events');
  client.handleCommands(commandFolders, './src/commands');
	client.login(process.env.TOKEN)
}) ();


