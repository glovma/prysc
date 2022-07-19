module.exports.run = async (client, message, args) => {
  
  if !(message.author.id === '444982412708151307') {
    message.reply('You are not authorized to use this command.')
    return
  } else {
    message.delete()

    const msg = args.join(' ')

    message.channel.send(msg)
    return
  }
}

module.exports.config = {
  name: 'echo',
  aliases: ['say']
}
