const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const user = message.mentions.users.first || client.users.cache.get(args[0]) || message.author;

  const Avatar = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor({name: `${user.username}'s Avatar`})
    
    .addField('PNG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })})`, true)
    .addField('JPG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'jpg' })})`, true)
    .addField('WEBP', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })})`, true)

    .setImage(user.displayAvatarUrl({size: 4096, dynamic: true}))
    .setTimestamp()
  message.channel.send({embeds: [Avatar]})
}

module.exports.config = {
  name: 'avatar',
  aliases: ['av']
}
