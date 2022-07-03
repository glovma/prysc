const { SlashCommandBuilder  } = require('@discordjs/builders');
const { MessageEmbed, Client } = require('discord.js');

/**
 * @param {Client} client
 */

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Replies with the bot's latency."),
  async execute(client, interaction) {
    
    const ping = Math.round(client.ws.ping);
    const pinger = new MessageEmbed()
                       .setTitle('Pong!')
                       .setDescription('Pinging...')
                       .setColor('BLURPLE')
    
    const pong = await interaction.reply({
                       embeds: [pinger]
    })

    await new Promise(resolve => setTimeout(resolve, 2250))

    const ponger = pong.embeds[0]
    ponger.setDescription(`The bot's ping is ${ping}ms.`)

    pong.edit({
      embeds: [ponger]
    })
}
