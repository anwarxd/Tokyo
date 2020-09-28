const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");

// Global Settings
const prefix = '</';

bot.on('message', async message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;    
    let args = message.conten.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    if (msg ===prefix + 'PING') {
        message.channel.send('PONG!')
    }


    var dogs = ["674516418641", "76527952860925752", "7628960184827756", "7825627628572680982", "758728962852y772", "7578262987628098"]
    var throwDog = dogs[Math.floor(Math.random() * dogs.length)];

    if (msg === prefix + 'DOG') {
        message.channel.send(`Ini Waifumu Mas! \n${throwDog}`);
    }


});

bot.on("ready", () => {
    console.log('BOT STARTED.');
});

bot.login(process.env.BOT_TOKEN);
