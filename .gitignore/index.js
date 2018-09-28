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

client.on('message', message => {
   
    if(message.content === "Bonjour"){
        message.reply("salut");
        console.log('Le bot dit bonjour');
    }

     if(message.content === "bonjour"){
        message.reply("salut");
        console.log('Le bot dit bonjour');
    }

     if(message.content === "yep"){
        message.reply("salut");
        console.log('Le bot dit bonjour');
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0099FF")
        .setTitle("Commandes de la FLEM")
        .addField("!help","Affiche les commandes disponible sur le BOT FLEM.")
        .addField("Bonjour", "Le bot te repondra!")
        .addField("!statistiques", "Pour connaître tes statistiques d'utilisateur Discord.")
        .addField("!bot", "Le bot répetera à interval régulier le message qui suivra la commande. Seul le staff est autorisé à l'utiliser.")
        .addField("!stop", "Cette commande arrêtera le messsage.")
        .setFooter("Pour plus d'information se renseigner auprès du technicien Discord (@shoumi#7812)")
        .addField("!clear XX", "Permet de supprimer le nombre de message indiqué, seul le staff est autorisé à utiliser cette fonction!")
        message.channel.sendMessage(help_embed)
        console.log("Menu !help ouvert!")
    }
