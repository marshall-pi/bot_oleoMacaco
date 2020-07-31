const Discord = require('discord.js')

const client = new Discord.Client()


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