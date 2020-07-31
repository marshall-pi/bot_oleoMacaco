const Discord = require('discord.js')

const client = new Discord.Client()
// Boas-vindas
client.on('guildMemberAdd', member => {
    const welcomeImage = new Discord.MessageAttachment('https://pbs.twimg.com/media/Ea523EmXgAEs-vG.jpg')
    const channel = member.guild.channel.cache.find(ch => ch.name === 'geral')
    if(!channel) return
    channel.send(`Salve ${member}, bem-vindo ao Servidor `+guild.name+', não esqueça do Óleo de Macaco a meia noite !!!', welcomeImage)
})