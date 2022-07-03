const fs = require('fs');
var clc = require('cli-color')

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`${clc.bold.green('[Client]')} Logged in as: ${clc.bold.blue('prysc')}`);
  }
};
