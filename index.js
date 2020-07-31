const Discord = require('discord.js')
const fs = require('fs')
const ytdl = require('ytdl-core')

const { prefix, token, version } = require('./config.json')



const bot = new Discord.Client()

// Liga o Bot
bot.once('ready', () => {
    console.log('Monkey Oil is online! Running at version '+version)
    bot.user.setActivity("mamaco 🐒🐒🐒")
})

bot.once('disconnect', () => {
    console.log('Monkey Oil is offline!')
})

// Eventos
// Boas-vindas
bot.on('guildMemberAdd', member => {
    const welcomeImage = new Discord.MessageAttachment('https://pbs.twimg.com/media/Ea523EmXgAEs-vG.jpg')
    const channel = member.guild.channel.cache.find(ch => ch.name === 'geral')
    if(!channel) return
    channel.send(`Salve ${member}, bem-vindo ao Servidor `+guild.name+', não esqueça do Óleo de Macaco a meia noite !!!', welcomeImage)
})



// Comandos
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")

    switch(args[0]) {
        case 'meianoite':
            const image = new Discord.MessageAttachment('https://i.ytimg.com/vi/Csdg0lQhA5I/hqdefault.jpg')
            message.channel.send('@everyone MEIA NOITE !!! HORÁRIO OFICIAL DO ÓLEO DE MACACO :monkey: :monkey: :monkey:', image)
        break;

        case 'info':
            if(args[1] === 'version') {
                message.channel.send(`O Óleo de Macaco Bot está na versão ${version}`)
            } else if (args[0] === 'info' && !(args[1])) {
                message.channel.send('Bot que te avisa do Horário Oficial do Óleo de Macaco :monkey:')
            } else {
                message.channel.send('Comando inválido')
            }
        break;
        case 'oleo':
            
    
        
    }
})


// Toca o fatídico áudio
bot.on('message', async message => {
    // Se não for uma mensagem num servidor, não faça nada
    if (!message.guild) return

    // Se o comando for colocado, toca o áudio
    if (message.content === '&oleo') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play('src/monkeyOil.mp3', {
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

// Toca o fatídico áudio
bot.on('message', async message => {
    // Se não for uma mensagem num servidor, não faça nada
    if (!message.guild) return

    // Se o comando for colocado, toca o áudio
    if (message.content === '&anime') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play('src/monkeyOilOniichan.mp3', {
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


// Toca o áudio do zoio direito do Youtube
bot.on('message', async message => {
    // Se não for uma mensagem num servidor, não faça nada
    if (!message.guild) return

    // Se o comando for colocado, toca o áudio
    if (message.content === '&zoio') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play('src/monkeyOilZoio.mp3', {
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

// Toca o fatídico áudio
bot.on('message', async message => {
    // Se não for uma mensagem num servidor, não faça nada
    if (!message.guild) return

    // Se o comando for colocado, toca o áudio
    if (message.content === '&cedo') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play('src/monkeyOilCedo.mp3', {
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


bot.on('message', message => {
    if(message.channel.type !='text' || message.author.bot) return

    let command = message.content.split(' ')[0].slice(1)
    let args = message.content.replace('.'+ command, '').trim()

    switch(command) {
        case 'uptime': {
            //continuar
        }
    }
})

bot.login(token)