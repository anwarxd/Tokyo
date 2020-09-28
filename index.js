const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Hello") {
        message.channel.sendMessage("Hai Juga");
    }
});

bot.login(process.env.BOT_TOKEN);
