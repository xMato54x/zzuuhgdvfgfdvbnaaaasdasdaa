const discord = require("discord.js");
const commando = require('discord.js-commando')

class SuggestCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'suggest',
            group: 'utily',
            memberName: 'suggest',
            description: 'Suggest Command'          
        });
    }

    async run(message, args)
    {
      let words = args.split('');
      let desc = words.slice(0).join('');
      if(!desc)
      {
        var error1 = new discord.RichEmbed()
        .addField("Koristi:", ".suggest [Prijedlog]")
        .setColor("#0c7fe4")
         message.channel.send(error1)
          return;
      }
        var suggestEmbed = new discord.RichEmbed()
        .addField(":star: **NOVA SUGESTIJA**", ` » Discord Member: ${message.author}\n » Sugestija:\n**${desc}**`)      
        .setColor("#0c7fe4")
        .setFooter("© Second World")     
        message.guild.channels.find(channel => channel.name === 'logs').send(suggestEmbed)  

        var thanks = new discord.RichEmbed()
        .setDescription(" » Hvala `" + message.author.tag + "`, za tvoj prijedlog!")
        .setColor("#ff6b6b")    
        message.channel.send(thanks)    
    }   
}

module.exports = SuggestCommand