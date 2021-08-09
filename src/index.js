const Discord = require('discord.js')
const fs = require('fs')

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



bot.login(token)