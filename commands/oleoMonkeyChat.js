const Discord = require('discord.js')

const client = new Discord.Client()


// Comando Meia noite
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content === '!meianoite') {
        const image = new Discord.MessageAttachment('https://i.ytimg.com/vi/Csdg0lQhA5I/hqdefault.jpg')
        message.channel.send('@everyone MEIA NOITE !!! HORÁRIO OFICIAL DO ÓLEO DE MACACO :monkey: :monkey: :monkey:', image)
    }
})