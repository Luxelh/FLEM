const Discord = require('discord.js')
var client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.on("ready", function()  {
    console.log("Bot prêt!")
    client.user.setGame("!help    -> by shoumi")

});

const uneCommande = '!bot '


client.on('message', message => {
      if (message.content.startsWith(uneCommande)) {
        const str = message.content.substring(uneCommande.length)
      var interval = setInterval(function(){
        message.channel.sendMessage(str)
    } , 28800  * 1000);

client.on('message', function(message) {
     if (message.content === '!stop') {
        clearInterval(interval);  
     }
    })}});
