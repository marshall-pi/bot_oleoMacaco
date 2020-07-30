const Discord = require('discord.js')
const { prefix, token } = require('./config.json')

const client = new Discord.Client()

// Liga o Bot
client.on('ready', () => {
    console.log('Monkey Oil is online!')
})


// Boas-vindas
client.on('guildMemberAdd', member => {
    const welcomeImage = new Discord.MessageAttachment('https://pbs.twimg.com/media/Ea523EmXgAEs-vG.jpg')
    const channel = member.guild.channel.cache.find(ch => ch.name === 'geral')
    if(!channel) return
    channel.send(`Salve ${member}, bem-vindo ao Servidor `+guild.name+', não esqueça do Óleo de Macaco a meia noite !!!', welcomeImage)
})


// Comando Meia noite
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content === '!meianoite') {
        const image = new Discord.MessageAttachment('https://i.ytimg.com/vi/Csdg0lQhA5I/hqdefault.jpg')
        message.channel.send('@everyone MEIA NOITE !!! HORÁRIO OFICIAL DO ÓLEO DE MACACO :monkey: :monkey: :monkey:', image)
    }
})


// Toca o fatídico áudio
client.on('message', async message => {
    // Se não for uma mensagem num servidor, não faça nada
    if (!message.guild) return

    // Se o comando for colocado, toca o áudio
    if (message.content === '!oleo') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play('monkeyoil.mp3', {
                volume: 1,
            })
            dispatcher.resume()

            dispatcher.on('start', () => {
                console.log('Tocando!')
            })
            dispatcher.on('finish', () => {
                console.log('Terminei de tocar!')
                connection.disconnect()
            })
            dispatcher.on('error', console.error)
        } else {
            // Mensagem caso o user não esteja em um canal de voz
            message.reply('Você não está pronto para o Óleo de Macaco :monkey: :monkey: (Entre em um canal de voz)')
        }

    }
})


client.login(token)