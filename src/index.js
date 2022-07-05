const ClientManager = require('./heart/clientManager');
const { Intents } = require('discord.js')
const client = new ClientManager({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
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
  disableMentions: 'everyone',
});

client.setup();
