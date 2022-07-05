var clc = require('cli-color');

module.exports = (client) => {

  const Client = client.user.tag;
  console.log(`${clc.bold.green('[Client]')} Logged in as: ${clc.bold.blue(Client)}`);
};
