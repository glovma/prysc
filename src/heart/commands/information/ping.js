const { MessageEmbed, Client } = require('discord.js');

/**
 * @param {Client} client
 */

module.exports.run = async (client, message, args) => {
    const ping = Math.round(client.ws.ping);
    const pinger = new MessageEmbed()
                       .setTitle('Pong!')
                       .setDescription('Pinging...')
                       .setColor('BLURPLE')

    const pong = await message.reply({
                       embeds: [pinger]
    })

    await new Promise(resolve => setTimeout(resolve, 2250))

    const ponger = pong.embeds[0]
    ponger.setDescription(`The bot's ping is ${ping}ms.`)

    pong.edit({
      embeds: [ponger]
    })
};

module.exports.config = {
  name: 'ping',
  aliases: ['latency'], //You can put aliases here, eg: aliases: ['tst', 't']
};
