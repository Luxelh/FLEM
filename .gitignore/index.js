const Discord = require('discord.js')
var client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.on("ready", function()  {
    console.log("Bot prêt!")
    client.user.setGame("!help    -> by shoumi")

});

