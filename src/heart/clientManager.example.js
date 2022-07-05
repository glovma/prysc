const { Client, Collection, Intents } = require('discord.js');
const EventHandler = require('./utils/loadEvents');

module.exports = class ClientManager extends Client {
  constructor(options) {
    super(options);
    this.commands = new Collection();
    this.aliases = new Collection();
  }

  setup() {
    this.events = new EventHandler(this);
    this.events.init();
    require('./utils/loadCommands')(this);
    this.login("Your_Token");
  }
};
